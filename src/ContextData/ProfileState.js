import React from 'react';
import ProfileContext from './ProfileContext';
import { useState } from 'react';

export default function ProfileState(props) {
    const s1 = {
        "name": "Dhananjay Rakshe",
        "class": "Tybcs",
    }
    const [profile, setProfile] = useState(s1);


    const updateProfile = () => {
        setTimeout(() => {
            setProfile(
                {
                    "name": "Vansh Rakshe",
                    "class": "Junior KG",
                }
            )
        }, 3000)
    }
    return (
        <div>
            <ProfileContext.Provider value={{profile, updateProfile}}>
                {props.children}
            </ProfileContext.Provider>
        </div>
    );
}
