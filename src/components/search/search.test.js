import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Search from './search'

afterEach(cleanup)

describe('Search', () => {
    it('should render the search input', function() {
        const onSubmit = jest.fn(a => a)
        const { getByLabelText } = render(
            <Search onSubmit={onSubmit} label={'Search:'} />
        )
        expect(getByLabelText('Search:')).toBeVisible()
    })
    it('should type into input', function() {
        const onSubmit = jest.fn(a => a)
        const { getByLabelText } = render(
            <Search onSubmit={onSubmit} label={'Search:'} />
        )
        fireEvent.change(getByLabelText('Search:'), {
            target: { value: 'food' },
        })
        expect(getByLabelText('Search:').value).toEqual('food')
    })
    it('should call fn on submit', () => {
        const onSubmit = jest.fn(a => a)
        const { getByTestId, getByText, getByLabelText } = render(
            <Search onSubmit={onSubmit} label={'Search:'} />
        )
        fireEvent.change(getByLabelText('Search:'), {
            target: { value: 'food' },
        })
        fireEvent.submit(getByTestId('search'))

        expect(onSubmit).toHaveBeenCalled()
        expect(onSubmit).toHaveBeenCalledWith('food')
    })
})
