import React from 'react'
import { useAppStore } from './stores/app-store'

export default function Username() {
    const username = useAppStore((state) => state.username);
    const updateUsername = useAppStore((state) => state.updateUsername);
    console.log('Render Username');

    return (
        <div>
            <p>Username: {username}</p>
            <input
                type='text'
                placeholder='New Username'
                onChange={(event) => {
                    const newUsername = event.target.value;
                    updateUsername(newUsername);
                }}
            />
        </div>
    )
}
