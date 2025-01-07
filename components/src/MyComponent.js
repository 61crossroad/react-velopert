const MyComponent = props => {
    return <div>My Component with Sonny Stitt<br />
            It's {props.name}<br />
            - {props.bye}
            </div>;
};

MyComponent.defaultProps = {
    name: 'Javascript',
    bye: 'Bye!'
};

export default MyComponent;