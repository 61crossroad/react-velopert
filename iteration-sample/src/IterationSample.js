import { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'Snowman'},
        { id: 2, text: 'Ice'},
        { id: 3, text: 'Snow'},
        { id: 4, text: 'Winds'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>));
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </>);
}

export default IterationSample;