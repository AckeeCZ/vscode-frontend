export const index = (name) => `export { default } from './${name}';\n`;

export const indexFela = (name, dependencies: boolean) => `${
  dependencies
    ? "import { connectFela } from '../../dependencies'"
    : "import { connect as connectFela } from 'react-fela'"
};
import ${name} from './${name}';
import * as felaRules from './${name}.rules';

export default connectFela(felaRules)(${name});
`;

export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';"
}

const ${name} = ({ styles }) => {
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

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes, useFelaEnhanced } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';\nimport { useFelaEnhanced } from 'hooks'"
}

import * as felaRules from './${name}.rules';

const ${name} = () => {
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

export default ${name};
`;

export const styles = (dependencies: boolean) =>
  "export const container = () => ({});\n";

export const component = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { React, PropTypes } from '../../dependencies';"
    : "import React from 'react';\nimport PropTypes from 'prop-types';"
}

const ${name} = () => {
  return (
    
  );
};

${name}.propTypes = {};

export default ${name};
`;
