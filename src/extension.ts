import * as vscode from "vscode";
import Model from "./model";

export function activate(context: vscode.ExtensionContext) {
  const model = new Model();

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "extension.createComponent",
      (file: vscode.Uri) => {
        model.createComponent(file && file.fsPath);
      }
    )
  );
}

export function deactivate() {}
