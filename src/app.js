import React from 'react'
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';

const bodyStyle = {
    margin: "auto",
    width: "500px"
};

const userRow = {
    paddingBottom: "10px"
}

class UserApp extends React.Component {
    render() {
        return (
            <div style={bodyStyle}>
                <h1>NBX frontend recruitment assignment</h1>
                <div style={userRow}>
                    <UserForm />
                </div>
                <div style={userRow}>
                    <UserList />
                </div>
            </div>
            // <div style={bodyStyle}>
            //     <h1>Users</h1>
            //     <div id="user-list">
            //         <div style={userRow}>
            //             <div><span>Name:</span> <span>John Smith</span></div>
            //             <div><span>Email:</span> <span>john@smith.org</span></div>
            //         </div>
            //         <div style={userRow}>
            //             <div><span>Name:</span> <span>Jane Smith</span></div>
            //             <div><span>Email:</span> <span>jane@smith.org</span></div>
            //         </div>
            //     </div>
            // </div>

        );
    }
}

export default UserApp;
