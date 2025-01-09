import { useState } from 'react';

const Say = () => {
    // const message is modifiable?
    const [message, setMessage] = useState('');
    console.log(message);
    console.log(setMessage);
    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage('Bye~');

    // const color is modifiable?
    const [color, setColor] = useState('black');
    console.log(color);
    console.log(setColor);
    // console.log is repeatedly called when the state is updated.. why?

    return(
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                Red
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                Green
            </button>
            <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>
                Blue
            </button>
        </div>
    );
};

export default Say;