import { useState } from "react";

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>Event Practice (function)</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="Type anything"
                value={message}
                onChange={onChangeMessage}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>Confirm</button>
        </div>
    )
}
export default EventPractice;