import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Compolete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : (
            <p>Please sign in</p>
        )}
    </div>
  )
}

export default UserMessage