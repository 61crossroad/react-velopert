import { Component } from "react";

class EventPractice extends Component {

    state = {
        message: ''
    };

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

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Type something"
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
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>Confirm 1</button>
                <button onClick={this.handleClick}>Confirm 2</button>
            </div>
        );
    }
}

export default EventPractice;