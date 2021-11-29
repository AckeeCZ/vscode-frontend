export const index = (name: string) => `export * from './${name}';\n`;

export const indexFela = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { connectFela } from '../../dependencies'"
    : "import { connect as connectFela } from 'react-fela'"
};
import { ${name} as ${name}Own } from './${name}';
import * as felaRules from './${name}.rules';

export const ${name} = connectFela(felaRules)(${name}Own);
`;

export const felaComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { PropTypes } from '../../dependencies';"
    : "import PropTypes from 'prop-types';"
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

export const felaHookComponent = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { PropTypes, useFelaEnhanced } from '../../dependencies';"
    : "import PropTypes from 'prop-types';\nimport { useFelaEnhanced } from 'hooks'"
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

export const component = (name: string, dependencies: boolean) => `${
  dependencies
    ? "import { PropTypes } from '../../dependencies';"
    : "import PropTypes from 'prop-types';"
}

export const ${name} = () => {
  return (
    <>

    </>
  );
};

${name}.propTypes = {};
`;
