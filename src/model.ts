import * as vscode from "vscode";
import * as fs from "fs";
import * as shell from "shelljs";
import * as path from "path";

import * as templates from "./template/component";
import config from "./config";

export default class Model {
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
        this.createFile(folderPath, `${name}.styles.js`, templates.styles);

        vscode.window.showInformationMessage(
          "The component has been successfuly created."
        );
      });
  }

  createComponentFile(path: string, name: string, fela: boolean) {
    const fullName = name + ".jsx";
    const configuration = vscode.workspace.getConfiguration(config.namespace);

    let content;
    if (fela && !configuration.felaHooks) {
      content = templates.felaComponent(name, configuration.moduleDependencies);
    } else if (fela && configuration.felaHooks) {
      content = templates.felaHookComponent(name, configuration.moduleDependencies);
    } else {
      content = templates.component(name, configuration.moduleDependencies);
    }

    this.createFile(path, fullName, content);
  }

  createIndexFile(componentName: string, path: string, fela: boolean) {
    const name = "index.js";
    const configuration = vscode.workspace.getConfiguration(config.namespace);

    let content;
    if (!fela || (fela && configuration.felaHooks)) {
      content = templates.index(componentName);
    } else {
      content = templates.indexFela(componentName);
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
