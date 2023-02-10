
import App from './App';
import { UserDetail } from './Components/UserDetail';

import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

test('renders MyFace text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText("MyFace");
    expect(textElement).toBeInTheDocument();
});

describe("My Component", () => {
    it("Should check the menu bar shows when clicked", async () => {
        const component = render(<App />);

        const menu1 = screen.getByTestId("our-menu")
        expect(menu1).toHaveClass('menu-wrapper')

        fireEvent.click(component.getByTestId("menu-button"));

        expect(menu1).toHaveClass('menu-appear')

        fireEvent.click(component.getByTestId("menu-button"));

        expect(menu1).toHaveClass('menu-wrapper')

    });
});

