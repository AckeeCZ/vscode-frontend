import * as vscode from "vscode";

export interface Configuration extends vscode.WorkspaceConfiguration {
  moduleDependencies: boolean;
  felaHooks: boolean;
  typescript: boolean;
  typescriptFelaTheme: boolean;
  typescriptFelaExtendProp: boolean;
  includeReactImport: boolean;
}
