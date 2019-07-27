const vscode = require("vscode");
const fs = require("fs");
const shell = require("shelljs");
const path = require("path");

const indexContent = name => `export { default } from './${name}'\n`;

const componentContent = name => `import { React, PropTypes, connectFela } from '../../dependencies';

import * as componentStyles from './${name}.style';

const ${name} = ({ styles }) => (
    <div className={styles.container}>
        
    </div>
);

${name}.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};

export default connectFela(componentStyles)(${name});\n`;

const stylesContent = name => `export const ${name} = () => ({});\n`;

const handleError = err => {
  if (err) {
    return vscode.window.showErrorMessage("Failed to create a component!");
  }
};

const createComponent = () => {
  vscode.window
    .showInputBox({
      value: "",
      prompt: "Component name",
      ignoreFocusOut: true
    })
    .then(name => {
      if (!name) return;

      console.log(vscode.workspace.workspaceFolders)

      // Get path
      const workspacePath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      const folderPath = `${workspacePath}/${name}/`;

      // Create component directory
      shell.mkdir("-p", folderPath);

      // Create files

      fs.writeFile(
        path.join(folderPath, "index.js"),
        indexContent(name),
        handleError
      );

      fs.writeFile(
        path.join(folderPath, `${name}.jsx`),
        componentContent(name),
        handleError
      );

      fs.writeFile(
        path.join(folderPath, `${name}.styles.js`),
        stylesContent(name),
        handleError
      );

      vscode.window.showInformationMessage(
        "The comopnent was successfuly created."
      );
    });
};

module.exports = createComponent;
