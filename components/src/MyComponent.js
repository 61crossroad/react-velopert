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

const MyComponent = ({ name, bye, children }) => {
    return (<div>My Component with Sonny Stitt<br />
            - It's {name}<br />
            - bye: {bye}<br />
            - children: {children}
            </div>);
};

MyComponent.defaultProps = {
    name: 'Javascript',
    bye: 'Bye!',
    children: 'No babies'
};

MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;