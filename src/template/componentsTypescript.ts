import type { Configuration } from "../types";

const getExtendProp = (config: Configuration) =>
  config.typescriptFelaExtendProp
    ? `extend?: ${
        config.typescriptFelaTheme
          ? "RulesExtend<typeof felaRules>;"
          : "Partial<Record<keyof typeof felaRules, TRule>>;"
      }`
    : "";

const getExtendPropImport = ({ typescriptFelaExtendProp, typescriptFelaTheme, useAckeeFelaPackage }: Configuration) => {
  if (!typescriptFelaExtendProp) {
    return "";
  }

  return typescriptFelaTheme
    ? `import type { RulesExtend } from '${useAckeeFelaPackage ? "@ackee/fela" : "styles/theme"}';`
    : "import type { TRule } from 'fela';";
};

export const felaComponent = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? `import {${config.includeReactImport ? " React," : ""} FelaWithStylesProps } from '../../dependencies';`
    : `${
        config.includeReactImport ? `import React from 'react';\n` : ""
      }import type { FelaWithStylesProps } from 'react-fela';`
}
${getExtendPropImport(config)}
import * as felaRules from './${name}.rules';

export interface ${name}OwnProps {
  ${getExtendProp(config)}
}

interface ${name}Props extends FelaWithStylesProps<${name}OwnProps, typeof felaRules> {}

export const ${name} = ({ styles }: ${name}Props) => {
    return (
      <div className={styles.container}>

      </div>
    );  
};
`;

export const felaHookComponent = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? `import {${config.includeReactImport ? " React," : ""} useFelaEnhanced } from '../../dependencies';`
    : `${config.includeReactImport ? `import React from 'react';\n` : ""}import { useFelaEnhanced } from '${
        config.useAckeeFelaPackage ? "@ackee/fela" : "hooks"
      }';`
}
${getExtendPropImport(config)}

import * as felaRules from './${name}.rules';

export interface ${name}Props {
  ${getExtendProp(config)}
}

export const ${name} = ({ ${config.typescriptFelaExtendProp ? "extend" : ""} }: ${name}Props) => {
    const { styles } = useFelaEnhanced(felaRules${config.typescriptFelaExtendProp ? `, { extend }` : ""});

    return (
        <div className={styles.container}>

        </div>
    );
};
`;

export const styles = (config: Configuration) => `${
  config.typescriptFelaTheme
    ? `import type { TRuleWithTheme } from '${
        config.moduleDependencies ? "../../dependencies" : config.useAckeeFelaPackage ? "@ackee/fela" : "styles/theme"
      }';\n`
    : `import type { TRule } from '${config.moduleDependencies ? "../../dependencies" : "fela"}';`
}

export const container: ${config.typescriptFelaTheme ? "TRuleWithTheme" : "TRule"} = () => ({});
`;

export const component = (name: string, config: Configuration) => `${
  config.includeReactImport
    ? config.moduleDependencies
      ? "import { React } from '../../dependencies';"
      : "import React from 'react';"
    : ""
} 

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return (
    <>
    
    </>
  );  
};
`;
