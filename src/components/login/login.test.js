import React from 'react'
import Login from './login'
import {
    fireEvent,
    render,
    waitForElement,
    cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'

afterEach(cleanup)
describe('Login', () => {
    it('should render username field', function() {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('username')).toBeVisible()
    })
    it('should type in username', () => {
        const { getByLabelText } = render(<Login />)
        fireEvent.change(getByLabelText('Username:'), {
            target: { value: 'ryan' },
        })
        expect(getByLabelText('Username:').value).toEqual('ryan')
    })
    it('should render label text for username', () => {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('username-label').innerHTML).toEqual('Username:')
    })
    it('should render the label text for password', () => {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('password-label').innerHTML).toEqual('Password:')
    })
    it('should type into password field', () => {
        const { getByLabelText } = render(<Login />)
        fireEvent.change(getByLabelText('Password:'), {
            target: { value: 'abcdefg' },
        })
        expect(getByLabelText('Password:')).toBeVisible()
        expect(getByLabelText('Password:').value).toEqual('abcdefg')
    })
    it('should submit the form', () => {
        const fn = jest.fn(a => a)
        const { getByTestId } = render(<Login onClick={fn} />)
        fireEvent.submit(getByTestId('submit'), {
            username: 'username',
            password: 'password',
        })
        expect(fn).toHaveBeenCalled()
    })
    it('should have a register link', function() {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('register').innerHTML).toEqual(
            'No account? Register'
        )
    })
    it('should have a sign up message', () => {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('new').innerHTML).toEqual('New? Sign up')
    })
})
