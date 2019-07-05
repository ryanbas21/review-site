import React from 'react'
import { render, waitForElement, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Item from './item'
afterEach(cleanup)
describe('Item Component', () => {
    it('should render the name', function() {
        const { getByTestId } = render(<Item name={'item name'} />)
        expect(getByTestId('name').innerHTML).toEqual('item name')
    })
    it('should render the rating', () => {
        const { getByTestId } = render(<Item name={'item name'} rating={4.2} />)
        expect(getByTestId('rating').innerHTML).toEqual('4.2')
    })
    it('should render the address', () => {
        const { getByTestId } = render(
            <Item address={'123 st'} name={'item name'} rating={4.2} />
        )
        expect(getByTestId('address').innerHTML).toEqual('123 st')
    })
    it('should render the type of resturant', () => {
        const { getByTestId } = render(
            <Item
                type={'Korean'}
                address={'123 st'}
                name={'item name'}
                rating={4.2}
            />
        )
        expect(getByTestId('type').innerHTML).toEqual('Korean')
    })
    it('should render the number of reviews', () => {
        const { getByTestId } = render(
            <Item
                numberOfReviews={30}
                type={'Korean'}
                address={'123 st'}
                name={'item name'}
                rating={4.2}
            />
        )
        expect(getByTestId('number-of-reviews').innerHTML).toEqual('30')
    })
    it('should render an image', () => {
        const { getByTestId } = render(
            <Item
                numberOfReviews={30}
                type={'Korean'}
                address={'123 st'}
                name={'item name'}
                rating={4.2}
                img={{ src: 'imgur/photo.jpg', alt: 'korean resturant' }}
            />
        )
        expect(getByTestId('photo')).toBeVisible()
    })
})
