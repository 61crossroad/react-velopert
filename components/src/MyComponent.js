/*
const MyComponent = props => {
    const { name, bye, children } = props;
    return <div>My Component with Sonny Stitt<br />
            - It's {name}<br />
            - bye: {bye}<br />
            - children: {children}
            </div>;
};
*/

import PropTypes from 'prop-types';

const MyComponent = ({ name, bye, favoriteNumber, children }) => {
    return (<div>My Component with Sonny Stitt<br />
            - It's {name}<br />
            - bye: {bye}<br />
            - children: {children}<br />
            - lucky {favoriteNumber}!
            </div>);
};

// ## These Things don't work...
MyComponent.defaultProps = {
    name: 'Javascript',
    bye: 'Bye!',
    children: 'No babies'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;