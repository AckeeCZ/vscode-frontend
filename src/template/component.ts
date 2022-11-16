import type { Configuration } from "../types";

export const index = (name: string) => `export * from './${name}';\n`;

export const indexFela = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? `import {${config.includeReactImport ? " React," : ""} connectFela } from '../../dependencies'`
    : `${
        config.includeReactImport ? `import React from 'react';\n` : ""
      }import { connect as connectFela } from 'react-fela'`
};
import { ${name} as ${name}Own } from './${name}';
import * as felaRules from './${name}.rules';

export const ${name} = connectFela(felaRules)(${name}Own);
`;

export const felaComponent = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? `import {${config.includeReactImport ? " React," : ""} PropTypes } from '../../dependencies';`
    : `${config.includeReactImport ? `import React from 'react';\n` : ""}import PropTypes from 'prop-types';`
}

export const ${name} = ({ styles }) => {
  return (
    <div className={styles.container}>
        
    </div>
  );
};

${name}.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};
`;

export const felaHookComponent = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? `import {${config.includeReactImport ? " React," : ""} PropTypes, useFelaEnhanced } from '../../dependencies';`
    : `${
        config.includeReactImport ? `import React from 'react';\n` : ""
      }import PropTypes from 'prop-types';\nimport { useFelaEnhanced } from '${
        config.useAckeeFelaPackage ? "@ackee/fela" : "hooks"
      }'`
}

import * as felaRules from './${name}.rules';

export const ${name} = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>

        </div>
    );
};

${name}.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};
`;

export const styles = () => "export const container = () => ({});\n";

export const component = (name: string, config: Configuration) => `${
  config.includeReactImport
    ? config.moduleDependencies
      ? "import { React } from '../../dependencies';"
      : "import React from 'react';"
    : ""
} 

export const ${name} = () => {
  return (
    <>

    </>
  );
};

${name}.propTypes = {};
`;
