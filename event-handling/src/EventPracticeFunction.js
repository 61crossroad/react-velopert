import { useState } from "react";

const EventPractice = () => {
    /*
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    */

    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        /*
        setUsername('');
        setMessage('');
        */
       setForm({
        username: '',
        message: ''
       })
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
                // onChange={onChangeUsername}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="Type anything"
                value={message}
                // onChange={onChangeMessage}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>Confirm</button>
        </div>
    )
}
export default EventPractice;