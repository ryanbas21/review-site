import React from 'react'
import Signup from './siginup'
import { cleanup, render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'

afterEach(cleanup)
describe('Signup', function() {
    it('should have a First Name name field', function() {
        const { getByLabelText } = render(<Signup />)
        expect(getByLabelText('First Name:')).toBeVisible()
        fireEvent.change(getByLabelText('First Name:'), {
            target: { value: 'ryan' },
        })

        expect(getByLabelText('First Name:').value).toEqual('ryan')
    })
    it('should have a Last Name name field', function() {
        const { getByLabelText } = render(<Signup />)
        expect(getByLabelText('Last Name:')).toBeVisible()
        fireEvent.change(getByLabelText('Last Name:'), {
            target: { value: 'Bas' },
        })

        expect(getByLabelText('Last Name:').value).toEqual('Bas')
    })
    it('should have a Password field', function() {
        const { getByLabelText } = render(<Signup />)
        expect(getByLabelText('Password:')).toBeVisible()
        fireEvent.change(getByLabelText('Password:'), {
            target: { value: '1234' },
        })

        expect(getByLabelText('Password:').value).toEqual('1234')
    })
    it('should have a Zip code field', function() {
        const { getByLabelText } = render(<Signup />)
        expect(getByLabelText('Zip Code:')).toBeVisible()
        fireEvent.change(getByLabelText('Zip Code:'), {
            target: { value: '9999' },
        })

        expect(getByLabelText('Zip Code:').value).toEqual('9999')
    })
    it('should have an email field', function() {
        const { getByLabelText } = render(<Signup />)
        expect(getByLabelText('Email:')).toBeVisible()
        fireEvent.change(getByLabelText('Email:'), {
            target: { value: 'someone@something.com' },
        })

        expect(getByLabelText('Email:').value).toEqual('someone@something.com')
    })
    it('should have a title of Sign up', function() {
        const { getByTestId } = render(<Signup title={'Sign Up!'} />)
        expect(getByTestId('title').innerHTML).toEqual('Sign Up!')
    })
    it('should submit the form', () => {
        const fn = jest.fn(a => a)
        const { getByTestId } = render(<Signup onClick={fn} />)
        fireEvent.submit(getByTestId('signup-form'), {
            username: 'email',
            password: 'password',
            zipCode: '999',
            firstName: 'ryan',
            lastName: 'bas',
        })
        fireEvent.submit(getByTestId('signup-form'))
        expect(fn).toHaveBeenCalled()
    })
})
