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

export default MyComponent;