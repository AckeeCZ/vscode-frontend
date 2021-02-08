export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React,  FunctionComponent, FelaWithStylesProps } from '../../dependencies';"
    : "import React, { FunctionComponent } from 'react';\nimport type { FelaWithStylesProps } from 'react-fela';"
}

export interface ${name}OwnProps {}

type ${name}Props = ${name}OwnProps & FelaWithStylesProps<${name}OwnProps, {}>;

const ${name}: FunctionComponent<${name}Props> = ({ styles }) => (
    <div className={styles.container}>
        
    </div>
);

export default ${name};
`;

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React,  FunctionComponent, FelaWithStylesProps, useFelaEnhanced } from '../../dependencies';"
    : "import React, { FunctionComponent } from 'react';\nimport type { FelaWithStylesProps } from 'react-fela';\nimport { useFelaEnhanced } from 'hooks';"
}

import * as rules from './${name}.styles';

export interface ${name}Props {}

const ${name}: FunctionComponent<${name}Props> = () => {
    const { styles } = useFelaEnhanced(rules);

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
    ? "import { React, FunctionComponent } from '../../dependencies';"
    : "import React, { FunctionComponent } from 'react';"
}

export interface ${name}Props {}

const ${name}: FunctionComponent<${name}Props> = () => (
    <>
        
    </>
);

export default ${name};
`;
