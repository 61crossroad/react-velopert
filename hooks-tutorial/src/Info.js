import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    /*
    useEffect(() => {
        console.log('Rendering completed!');
        console.log({
            name,
            nickname
        });
    });
    */
   
    /*
    useEffect(() => {
    console.log('Executed when this component is mounted');
    }, []);
    */

    /*
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);
    */

    // unmount only
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>Name:</b> {name}
                </div>
                <div>
                    <b>Nickname:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
