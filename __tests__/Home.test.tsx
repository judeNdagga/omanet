import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('should have organic text', () => {
    render(<Home />)  //ARRANGE

    const myElement = screen.getByRole('heading', {
        name: 'why'
    }) //ACT

    expect(myElement).toBeInTheDocument() //ASSERT
})