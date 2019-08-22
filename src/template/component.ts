export const index = name => `export { default } from './${name}';\n`;

export const indexFela = name => `import { connectFela } from '../../dependencies';
import ${name} from './${name}';
import * as styles from './${name}.styles';

export default connectFela(styles)(${name});
`;

export const felaComponent = name => `import { React, PropTypes } from '../../dependencies';

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

export const component = name => `import { React, PropTypes } from '../../dependencies';

const ${name} = () => (
    <>
        
    </>
);

${name}.propTypes = {};

export default ${name};
`;

export const styles = "export const container = () => ({});\n";
