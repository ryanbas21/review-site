import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
    return (
        <form
            data-testid="search"
            onSubmit={e => {
                e.preventDefault()
                return props.onSubmit(e.target.elements.input.value)
            }}
        >
            <label htmlFor="search">{props.label}</label>
            <input id="search" type="text" name="input" />
            <button type="submit" onClick={props.onSubmit}>
                Submit
            </button>
        </form>
    )
}
Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}
export default Search
