import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

function handleInputs(state, action) {
    switch (action.type) {
        case 'first':
            return { ...state, first: state.first + action.payload }
        case 'last':
            return { ...state, last: state.last + action.payload }
        case 'zipcode':
            return { ...state, zipcode: state.zipcode + action.payload }
        case 'email':
            return { ...state, email: state.email + action.payload }
        case 'password':
            return { ...state, password: state.password + action.payload }
    }
}

function Signup(props) {
    const [state, dispatch] = useReducer(handleInputs, {
        first: '',
        last: '',
        password: '',
        zipcode: '',
        email: '',
    })
    return (
        <>
            <header data-testid="title">{props.title}</header>
            <form data-testid="signup-form" onSubmit={props.onClick}>
                <label htmlFor="first">First Name:</label>
                <input
                    id="first"
                    type="text"
                    value={state.first}
                    onChange={e =>
                        dispatch({
                            type: 'first',
                            payload: state.first + e.target.value,
                        })
                    }
                />
                <label htmlFor="last">Last Name:</label>
                <input
                    id="last"
                    type="text"
                    value={state.last}
                    onChange={e =>
                        dispatch({
                            type: 'last',
                            payload: state.last + e.target.value,
                        })
                    }
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={state.email}
                    onChange={e =>
                        dispatch({
                            type: 'email',
                            payload: state.email + e.target.value,
                        })
                    }
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={state.password}
                    onChange={e =>
                        dispatch({
                            type: 'password',
                            payload: state.password + e.target.value,
                        })
                    }
                />
                <label htmlFor="zipcode">Zip Code:</label>
                <input
                    id="zipcode"
                    type="text"
                    value={state.zipcode}
                    onChange={e =>
                        dispatch({
                            type: 'zipcode',
                            payload: state.zipcode + e.target.value,
                        })
                    }
                />
            </form>
        </>
    )
}
Signup.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}
export default Signup
