import { render } from "@testing-library/react";
import { it, expect } from "vitest";

import Card from './Card'


it('should render without crashing', () => {
    render(<Card caption='caption-test' src='http://image-test' currNum={1} totalNum={3} />)
})

it('should match snapshot', () => {
    const { asFragment } = render(
        <Card
            caption='caption-test'
            src='http://image-test'
            currNum={1}
            totalNum={3}
        />)

    expect(asFragment()).toMatchSnapshot()
})

it('should match snapshot with different props', () => {
    const { asFragment } = render(
        <Card
            caption='caption-test-2'
            src='http://image-test-2'
            currNum={1}
            totalNum={5}
        />)
    expect(asFragment()).toMatchSnapshot()
})
