import * as vscode from "vscode";
import * as fs from "fs";
import * as shell from "shelljs";

import * as templatesJavascript from "./template/component";
import * as templatesTypescript from "./template/componentsTypescript";
import config from "./config";
import type { Configuration } from "./types";

export default class Model {
  getConfiguration() {
    return vscode.workspace.getConfiguration(config.namespace) as Configuration;
  }

  getTemplates() {
    const configuration = this.getConfiguration();
    return configuration.typescript ? templatesTypescript : templatesJavascript;
  }

  getWorkspacePath() {
    const workspaces = vscode.workspace.workspaceFolders;

    if (workspaces) {
      return workspaces[0].uri.toString().split(":")[1];
    }

    return null;
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

        const workspacePath = this.getWorkspacePath();
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

        const workspacePath = this.getWorkspacePath();
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
      content = templates.felaComponent(name, configuration);
    } else if (fela && configuration.felaHooks) {
      content = templates.felaHookComponent(name, configuration);
    } else {
      content = templates.component(name, configuration);
    }

    this.createFile(path, fullName, content);
  }

  createStyleFile(path: string, name: string) {
    const configuration = this.getConfiguration();
    const templates = this.getTemplates();
    const fullName = `${name}.rules.${configuration.typescript ? "t" : "j"}s`;

    this.createFile(path, fullName, templates.styles(configuration));
  }

  createIndexFile(componentName: string, path: string, fela: boolean) {
    const configuration = this.getConfiguration();
    const name = `index.${configuration.typescript ? "t" : "j"}s`;

    let content;
    if (fela && !configuration.felaHooks) {
      content = templatesJavascript.indexFela(componentName, configuration);
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

  handleError(error: any) {
    if (error) {
      vscode.window.showErrorMessage(error);
    }
  }
}
