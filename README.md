![Ackee javascript](images/ackee_javascript.jpeg)

# Ackee Frontend VS Code extension

A set of usefull snippets and commands we use at Ackee for web apps development.

## Features

* Commands for project scaffolding
* React/Fela snippets

## Commands

### Create component
*  `Component.jsx` - React stateless component
* `index.js` - index file to export the React component

### Create Fela component

Creates a folder with following structure:
*  `Component.jsx` - React stateless component with `styles` prop
*  `Component.styles.js` - fela rules
* `index.js` - index file to export the React component and wrap it with `connectFela`

#### Usage
1. Right click to a folder where you want to create a component
2. Select *"Ackee: create component"*
3. Type a name and press enter

![Create component example](images/create_component_example.jpg)

> **Note**: The command can also be triggered by a shortcut `cmd+a cmd+c` or by VS Code command line. But in that case the component is created in root directory of a project, because VS Code API does not provide selected folder in the explorer window. See [this issue](https://github.com/Microsoft/vscode/issues/3553) for more info.

## Snippets

Supported languages:

* JavaScript (.js)
* JavaScript React (.jsx)

| Trigger  | Content  |
|---|---|
| `frd→`  | Fela rule (default export)  |
| `frdt→`  | Fela rule with theme (default export)  |
| `fr→`  | Fela rule (named export)  |
| `frt→`  | Fela rule with theme (named export)  |
| `imrd→`  | Import React and PropTypes from dependencies  |
| `ed→` |  Export for component indexes  |
| `rfc→`  | React stateless component with FelaComponent  |
| `rfcc→`  | React stateless component with connectFela HOC  |


