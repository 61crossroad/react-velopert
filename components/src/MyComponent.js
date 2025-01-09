const MyComponent = props => {
    return <div>My Component with Sonny Stitt<br />
            It's {props.name}<br />
            - bye: {props.bye}<br />
            - children: {props.children}
            </div>;
};

MyComponent.defaultProps = {
    name: 'Javascript',
    bye: 'Bye!',
    children: 'No babies'
};

export default MyComponent;