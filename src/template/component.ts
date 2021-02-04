export const index = (name) => `export { default } from './${name}';\n`;

export const indexFela = (
  name
) => `import { connectFela } from '../../dependencies';
import ${name} from './${name}';
import * as styles from './${name}.styles';

export default connectFela(styles)(${name});
`;

export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';"
}

const ${name} = ({ styles }) => (
    <div className={styles.container}>
        
    </div>
);

${name}.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};

export default ${name};
`;

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';"
}

import * as rules from './${name}.styles';

const ${name} = () => {
    const { styles } = useFelaEnhanced(rules);

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

export default ${name};
`;

export const styles = (dependencies: boolean) =>
  "export const container = () => ({});\n";

export const component = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';"
}

const ${name} = () => (
    <>
        
    </>
);

${name}.propTypes = {};

export default ${name};
`;
