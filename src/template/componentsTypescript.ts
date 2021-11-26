export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, FelaWithStylesProps } from '../../dependencies';"
    : "import React from 'react';\nimport type { FelaWithStylesProps } from 'react-fela';"
}

export interface ${name}OwnProps {}

type ${name}Props = ${name}OwnProps & FelaWithStylesProps<${name}OwnProps, {}>;

const ${name} = ({ styles }: ${name}Props) => (
    <div className={styles.container}>
        
    </div>
);

export default ${name};
`;

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, useFelaEnhanced } from '../../dependencies';"
    : "import React from 'react';\nimport { useFelaEnhanced } from 'hooks';"
}

import * as felaRules from './${name}.rules';

export interface ${name}Props {}

const ${name} = ({}: ${name}Props) => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>

        </div>
    );
};

export default ${name};
`;

export const styles = (dependencies: boolean) => `${
  dependencies
    ? "import { TRule } from '../../dependencies';\n"
    : "import type { TRule } from 'fela';"
}

export const container: TRule = () => ({});
`;

export const component = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React } from '../../dependencies';"
    : "import React from 'react';"
}

export interface ${name}Props {}

const ${name} = ({}: ${name}Props) => (
    <>
        
    </>
);

export default ${name};
`;
