import React, { useState } from 'react'
import { onUserAdd, onUserDelete } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../setup/hooks'

const formElement = {
    margin: "20px"
}

const initialState = {
    name: '',
    email: '',
}

const UserForm = () => {
    const [userInputVal, setUserInputVal] = useState(initialState);

    const dispatch = useAppDispatch()

    const handleChange = (e) => {
        const element = e.currentTarget;
        const updatedUser = userInputVal;
        const {name, value} = element
       
        if (name && value){
            updatedUser[name] = element.value;
        }
        setUserInputVal({...updatedUser});
    }

    const handleSubmit = (e) => {
        dispatch(onUserAdd(userInputVal));
        setUserInputVal({...initialState});
    }

    return (
        <div>
            <h2>UserForm</h2>
                <div style={formElement}>
                Name:   <input name={"name"} value={userInputVal['name']} onChange={handleChange}/>
                </div>
                <div style={formElement}>
                Email:  <input name="email" value={userInputVal['email']} onChange={handleChange}/>
                </div>
            <button type={'submit'} onClick={handleSubmit}>Add user</button>
        </div> 
    )
}

export default UserForm;