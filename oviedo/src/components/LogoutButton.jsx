import React from 'react'
function LogoutButton({ logOut }) {
    const handleClick = () => {
        logOut();
    };
    return <button onClick={handleClick}>Logout</button>
}

export default LogoutButton