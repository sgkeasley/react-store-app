import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

// Create a Home page function which displays an input and button
// for user to login - once logged in the display should change to
// a Welcome page with logout button
export default function Landing() {

    const [userName, setUserName] = useState("");
    const [login, setLogin] = useState(false);

    // Create functions to manage login and logout
    function confirmLogin(login) {
        setLogin(true);
    };

    function confirmLogout(login) {
        setLogin(false);
    };

    // Create the different elements to display depending on whether
    // user is logged in or not
    return (
        <div id="login_welcome">
        {!login ? (
            <div>
            <label>Please login: 
                <input
                    onChange={((event) => setUserName(event.target.value))}
                    name="nameInput"
                    placeholder="Enter name here"
                    value={userName}
                />
            </label>
                <Button 
                    onClick={((event) => confirmLogin(event.target.value))}
                    value={userName} disabled={!userName}> Login </Button>
        </div>
        ) : (
            <div>
            <h1>Welcome {userName}</h1>
            <Button
                onClick={((event) => confirmLogout(event.target.value))}> Logout </Button>
        </div>
        )}
        </div>
    );
}