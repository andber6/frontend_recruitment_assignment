import React from 'react'
import { onUserDelete } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../setup/hooks'

const listItem = {
    textAlign: 'flex-start'
}

const flexEnd = {
    textAlign: 'flex-end'
}

const list = {
    width: '100%',
    height: '100vh'
}

const UserList = () => {
    const users = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const handleDelete = (e) => {
        const element = e.currentTarget;
        const {name} = element
        dispatch(onUserDelete(name));
    }

    return (
        <div>
            <h2>Users list</h2>
            <div >
                <ol style={list}>
                {
                    Object.keys(users).map((email, i) => (
                        console.log('what is name1: ', email),
                        console.log('what is users[0]: ', users[email].name),
                        
                            <li key={i} style={listItem}>
                                <span>
                                    {users[email].name} &emsp;
                                </span>
                                <span>
                                    {email} &emsp;
                                    <button style={flexEnd} name={email} onClick={handleDelete}>
                                        Delete User
                                    </button>
                                </span>
                            </li>
                    ))
                }
                </ol>
            </div>
        </div>
    )
}

export default UserList;