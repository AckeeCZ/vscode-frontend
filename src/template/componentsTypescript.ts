export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, FelaWithStylesProps } from '../../dependencies';"
    : "import React from 'react';\nimport type { FelaWithStylesProps } from 'react-fela';"
}

export interface ${name}OwnProps {}

type ${name}Props = ${name}OwnProps & FelaWithStylesProps<${name}OwnProps, {}>;

export const ${name} = ({ styles }: ${name}Props) => {
    return (
      <div className={styles.container}>

      </div>
    );  
};
`;

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, useFelaEnhanced } from '../../dependencies';"
    : "import React from 'react';\nimport { useFelaEnhanced } from 'hooks';"
}

import * as felaRules from './${name}.rules';

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
    const { styles } = useFelaEnhanced(felaRules);

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
  dependencies
    ? "import { React } from '../../dependencies';"
    : "import React from 'react';"
}

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return (

  );  
};
`;
