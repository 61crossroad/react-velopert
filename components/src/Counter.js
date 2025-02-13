import { Component } from "react";

class Counter extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    */
    state = {
        number: 0,
        fixedNumber: 0
    }
    render() {
        // const number is modifiable?!
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Constant Value: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('setState is called.');
                                console.log(this.state);
                            }
                        );
                        /*
                        this.setState(prevState => {
                            return {
                                number: prevState.number +1
                            };
                        });
                        // below code returns the object immediately..?
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                        */
                    }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;