import React from 'react'
import { onUserDelete } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../setup/hooks'

const UserList = () => {
    const users = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const handleDelete = (e) => {
        const element = e.currentTarget;
        const {name} = element
        dispatch(onUserDelete(name));
    }

    return (
        <div><h2>Users list</h2>
        {
            Object.keys(users).map((name, i) => (
                <div key={i}>{name}<button name={name} onClick={handleDelete}>Delete user</button></div>
            ))
        }
        </div>
    )
}