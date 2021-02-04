export const felaComponent = (name: string, dependencies: boolean) => `${
    dependencies
      ? "import { React,  FunctionComponent } from '../../dependencies';"
      : "import React, { FunctionComponent } from 'react';"
  }

type ${name}Props = {
    styles: object
}

const ${name}: FunctionComponent<${name}Props> = ({ styles }) => (
    <div className={styles.container}>
        
    </div>
);

export default ${name};
`;

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React,  FunctionComponent, useFelaEnhanced } from '../../dependencies';"
    : "import React, { FunctionComponent } from 'react';\nimport { useFelaEnhanced } from 'hooks';"
}

import * as rules from './${name}.styles';

type ${name}Props = {}

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

type ${name}Props = {}

const ${name}: FunctionComponent<${name}Props> = () => (
    <>
        
    </>
);

export default ${name};
`;
