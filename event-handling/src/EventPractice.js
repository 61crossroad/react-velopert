import { Component } from "react";

class EventPractice extends Component {

    state = {
        message: ''
    };

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Type something"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            // console.log(e);
                            // console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>Confirm</button>
            </div>
        );
    }
}

export default EventPractice;