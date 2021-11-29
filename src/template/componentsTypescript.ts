const getExtendProp = (
  typescriptFelaTheme: boolean,
  typescriptFelaExtendProp: boolean
) =>
  typescriptFelaExtendProp
    ? `extend?: ${
        typescriptFelaTheme
          ? "RulesExtend<typeof felaRules>;"
          : "Partial<Record<keyof typeof felaRules, TRule>>;"
      }`
    : "";

const getExtendPropImport = (
  typescriptFelaTheme: boolean,
  typescriptFelaExtendProp: boolean
) =>
  typescriptFelaExtendProp
    ? typescriptFelaTheme
      ? `import type { RulesExtend } from 'styles/theme';`
      : "import type { TRule } from 'fela';"
    : "";

export const felaComponent = (
  name: string,
  dependencies: boolean,
  typescriptFelaTheme: boolean,
  typescriptFelaExtendProp: boolean
) => `${
  dependencies
    ? "import { FelaWithStylesProps } from '../../dependencies';"
    : "import type { FelaWithStylesProps } from 'react-fela';"
}
${getExtendPropImport(typescriptFelaTheme, typescriptFelaExtendProp)}
import * as felaRules from './${name}.rules';

export interface ${name}OwnProps {
  ${getExtendProp(typescriptFelaTheme, typescriptFelaExtendProp)}
}

interface ${name}Props extends FelaWithStylesProps<${name}OwnProps, typeof felaRules> {}

export const ${name} = ({ styles }: ${name}Props) => {
    return (
      <div className={styles.container}>

      </div>
    );  
};
`;

export const felaHookComponent = (
  name: string,
  dependencies: boolean,
  typescriptFelaTheme: boolean,
  typescriptFelaExtendProp: boolean
) => `${
  dependencies
    ? "import { useFelaEnhanced } from '../../dependencies';"
    : "import { useFelaEnhanced } from 'hooks';"
}
${getExtendPropImport(typescriptFelaTheme, typescriptFelaExtendProp)}

import * as felaRules from './${name}.rules';

export interface ${name}Props {
  ${getExtendProp(typescriptFelaTheme, typescriptFelaExtendProp)}
}

export const ${name} = ({ ${
  typescriptFelaExtendProp ? "extend" : ""
} }: ${name}Props) => {
    const { styles } = useFelaEnhanced(felaRules${
      typescriptFelaExtendProp ? `, { extend }` : ""
    });

    return (
        <div className={styles.container}>

        </div>
    );
};
`;

export const styles = (
  dependencies: boolean,
  typescriptFelaTheme: boolean
) => `${
  typescriptFelaTheme
    ? `import type { TRuleWithTheme } from '${
        dependencies ? "../../dependencies" : "styles/theme"
      }';\n`
    : `import type { TRule } from '${
        dependencies ? "../../dependencies" : "fela"
      }';`
}

export const container: ${
  typescriptFelaTheme ? "TRuleWithTheme" : "TRule"
} = () => ({});
`;

export const component = (name: string, dependencies: boolean) => `${
  dependencies ? "import { React } from '../../dependencies';" : ""
}

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return (
    <>
    
    </>
  );  
};
`;
