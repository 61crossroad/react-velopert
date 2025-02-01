import { Component } from "react";

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    };

    /*
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick(e) {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    */

    handleChange = (e) => {
        /*
        this.setState({
            message: e.target.value
        });
        */
       this.setState({
        [e.target.name]: e.target.value
       });
    };

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Type anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    /* onChange={
                        (e) => {
                            // console.log(e);
                            // console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    } */
                   onKeyDown={this.handleKeyPress}
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>Confirm Inline</button>
                <button onClick={this.handleClick}>Confirm Method</button>
            </div>
        );
    }
}

export default EventPractice;