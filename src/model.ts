import * as vscode from "vscode";
import * as fs from "fs";
import * as shell from "shelljs";
import * as path from "path";

import { index, component, styles } from "./template/component";

export default class Model {
  createComponent(fileUri: string) {
    vscode.window
      .showInputBox({
        value: "",
        prompt: "Component name",
        ignoreFocusOut: true
      })
      .then(name => {
        if (!name) return;

        const workspacePath = vscode.workspace.workspaceFolders[0].uri
          .toString()
          .split(":")[1];
        const folderPath = `${workspacePath}/${name}`;

        this.createFolder(folderPath);
        this.createFile(folderPath, "index.js", index(name));
        this.createFile(folderPath, `${name}.jsx`, component(name));
        this.createFile(folderPath, `${name}.styles.js`, styles(name));

        vscode.window.showInformationMessage(
          "The component has been successfuly created."
        );
      });
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
