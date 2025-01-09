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

import { Component } from 'react';
import PropTypes from 'prop-types';

/*
const MyComponent = ({ name, bye, favoriteNumber, children }) => {
    return (<div>My Component with Sonny Stitt<br />
            - It's {name}<br />
            - bye: {bye}<br />
            - children: {children}<br />
            - lucky {favoriteNumber}!
            </div>);
};
*/

class MyComponent extends Component {
    static defaultProps = {
        name: 'Javascript'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const { name, bye, favoriteNumber, children } = this.props;
        return (
            <div>
                My Component with Sonny Stitt<br />
                - It's {name}<br />
                - bye: {bye}<br />
                - children: {children}<br />
                - lucky {favoriteNumber}!
            </div>
        );
    }
}

/* ## These Things only work in the class component, why..?
MyComponent.defaultProps = {
    name: 'Javascript',
    bye: 'Bye!',
    children: 'No babies'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/

export default MyComponent;