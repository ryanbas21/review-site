import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <a data-testid="new">New? Sign up</a>
            <form data-testid="login-form" onSubmit={props.onClick}>
                <label data-testid="username-label" htmlFor="username">
                    Username:
                </label>
                <input
                    id="username"
                    type="text"
                    data-testid="username"
                    onChange={e => setUsername(username + e.target.value)}
                    value={username}
                />
                <label data-testid="password-label" htmlFor="password">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    data-testid="password"
                    onChange={e => setPassword(username + e.target.value)}
                    value={password}
                />
                <button data-testid="submit" type="submit">
                    Submit
                </button>
                <a data-testid="register">No account? Register</a>
            </form>
        </>
    )
}

Login.propTypes = {
    onClick: PropTypes.func,
}
export default Login
