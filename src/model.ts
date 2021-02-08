import * as vscode from "vscode";
import * as fs from "fs";
import * as shell from "shelljs";

import * as templatesJavascript from "./template/component";
import * as templatesTypescript from "./template/componentsTypescript";
import config from "./config";

export default class Model {
  getConfiguration(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration(config.namespace);
  }

  getTemplates() {
    const configuration = this.getConfiguration();
    return configuration.typescript ? templatesTypescript : templatesJavascript;
  }

  createComponent(contextUri: string) {
    vscode.window
      .showInputBox({
        value: "",
        prompt: "Component name",
        ignoreFocusOut: true,
      })
      .then((name) => {
        if (!name) return;

        const workspacePath = vscode.workspace.workspaceFolders[0].uri
          .toString()
          .split(":")[1];
        const folderPath = `${contextUri || workspacePath}/${name}`;

        this.createFolder(folderPath);
        this.createIndexFile(name, folderPath, false);
        this.createComponentFile(folderPath, name, false);

        vscode.window.showInformationMessage(
          "The component has been successfuly created."
        );
      });
  }

  createFelaComponent(contextUri: string) {
    vscode.window
      .showInputBox({
        value: "",
        prompt: "Component name",
        ignoreFocusOut: true,
      })
      .then((name) => {
        if (!name) return;

        const workspacePath = vscode.workspace.workspaceFolders[0].uri
          .toString()
          .split(":")[1];
        const folderPath = `${contextUri || workspacePath}/${name}`;

        this.createFolder(folderPath);
        this.createIndexFile(name, folderPath, true);
        this.createComponentFile(folderPath, name, true);
        this.createStyleFile(folderPath, name);

        vscode.window.showInformationMessage(
          "The component has been successfuly created."
        );
      });
  }

  createComponentFile(path: string, name: string, fela: boolean) {
    const configuration = this.getConfiguration();
    const templates = this.getTemplates();
    const fullName = `${name}.${configuration.typescript ? "t" : "j"}sx`;

    let content;
    if (fela && !configuration.felaHooks) {
      content = templates.felaComponent(name, configuration.moduleDependencies);
    } else if (fela && configuration.felaHooks) {
      content = templates.felaHookComponent(
        name,
        configuration.moduleDependencies
      );
    } else {
      content = templates.component(name, configuration.moduleDependencies);
    }

    this.createFile(path, fullName, content);
  }

  createStyleFile(path: string, name: string) {
    const configuration = this.getConfiguration();
    const templates = this.getTemplates();
    const fullName = `${name}.styles.${configuration.typescript ? "t" : "j"}s`;

    this.createFile(
      path,
      fullName,
      templates.styles(configuration.moduleDependencies)
    );
  }

  createIndexFile(componentName: string, path: string, fela: boolean) {
    const configuration = vscode.workspace.getConfiguration(config.namespace);
    const name = `index.${configuration.typescript ? "t" : "j"}s`;

    let content;
    if (fela && !configuration.felaHooks) {
      content = templatesJavascript.indexFela(componentName, configuration.moduleDependencies);
    } else {
      content = templatesJavascript.index(componentName);
    }

    this.createFile(path, name, content);
  }

  createFolder(path: string) {
    shell.mkdir("-p", path);
  }

  createFile(path: string, name: string, content: string) {
    fs.writeFile(`${path}/${name}`, content, this.handleError);
  }

  handleError(error) {
    if (error) {
      vscode.window.showErrorMessage(error);
    }
  }
}
