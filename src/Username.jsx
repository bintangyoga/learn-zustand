import React from 'react'
import { useAppStore } from './stores/app-store'

export default function Username() {
    const store = useAppStore();
    return (
        <div>
            <p>Username: {store.username}</p>
            <input
                type='text'
                placeholder='New Username'
                onChange={(event) => {
                    const newUsername = event.target.value;
                    store.updateUsername(newUsername);
                }}
            />
        </div>
    )
}
