export const index = name => `export { default } from './${name}'\n`;

export const component = name => `import { React, PropTypes, connectFela } from '../../dependencies';

import * as componentStyles from './${name}.style';

const ${name} = ({ styles }) => (
    <div className={styles.container}>
        
    </div>
);

${name}.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};

export default connectFela(componentStyles)(${name});\n`;

export const styles = name => `export const ${name} = () => ({});\n`;
