import React from 'react';
import { useContext, useEffect } from 'react';
import ProfileContext from '../ContextData/ProfileContext';

export default function Body(props) {
    const a = useContext(ProfileContext)

    useEffect(() => {
        a.updateProfile();
    }, []);
    return <div>
        <h2>This is body</h2>
        <h3>React useContext Hook</h3>
        <p>My name is {a.profile.name} and i am in {a.profile.class}</p>
        <hr />
    </div>;
}
