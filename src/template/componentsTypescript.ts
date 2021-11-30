import type { Configuration } from "../types";

const getExtendProp = (config: Configuration) =>
  config.typescriptFelaExtendProp
    ? `extend?: ${
        config.typescriptFelaTheme
          ? "RulesExtend<typeof felaRules>;"
          : "Partial<Record<keyof typeof felaRules, TRule>>;"
      }`
    : "";

const getExtendPropImport = (config: Configuration) =>
  config.typescriptFelaExtendProp
    ? config.typescriptFelaTheme
      ? `import type { RulesExtend } from 'styles/theme';`
      : "import type { TRule } from 'fela';"
    : "";

export const felaComponent = (name: string, config: Configuration) => `${
  config.moduleDependencies
    ? "import { FelaWithStylesProps } from '../../dependencies';"
    : "import type { FelaWithStylesProps } from 'react-fela';"
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
    ? "import { useFelaEnhanced } from '../../dependencies';"
    : "import { useFelaEnhanced } from 'hooks';"
}
${getExtendPropImport(config)}

import * as felaRules from './${name}.rules';

export interface ${name}Props {
  ${getExtendProp(config)}
}

export const ${name} = ({ ${
  config.typescriptFelaExtendProp ? "extend" : ""
} }: ${name}Props) => {
    const { styles } = useFelaEnhanced(felaRules${
      config.typescriptFelaExtendProp ? `, { extend }` : ""
    });

    return (
        <div className={styles.container}>

        </div>
    );
};
`;

export const styles = (config: Configuration) => `${
  config.typescriptFelaTheme
    ? `import type { TRuleWithTheme } from '${
        config.moduleDependencies ? "../../dependencies" : "styles/theme"
      }';\n`
    : `import type { TRule } from '${
        config.moduleDependencies ? "../../dependencies" : "fela"
      }';`
}

export const container: ${
  config.typescriptFelaTheme ? "TRuleWithTheme" : "TRule"
} = () => ({});
`;

export const component = (name: string, config: Configuration) => `${
  config.moduleDependencies ? "import { React } from '../../dependencies';" : ""
}

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return (
    <>
    
    </>
  );  
};
`;
