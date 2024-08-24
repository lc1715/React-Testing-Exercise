import { render, fireEvent } from "@testing-library/react";
import { it, expect } from "vitest";

import Carousel from "./Carousel.jsx";
import TEST_IMAGES from "./_testCommon.js";


it('renders without crashing', () => {
  render(<Carousel photos={TEST_IMAGES} title='images for testing' />)
})

it('should match snapshot', () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title='images for testing' />)
  expect(asFragment()).toMatchSnapshot()
})

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();


  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
})


it('works when you click on the left arrow', () => {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title='photo-title' />
  )

  expect(
    container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument()


  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument()

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument()


  const leftArrowElement = container.querySelector('.bi-arrow-left-circle')
  fireEvent.click(leftArrowElement);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument()

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument()
})

it('will remove the right arrow button if on image # 3 and you click on right arrow ', function () {
  const { container } = render(<Carousel photos={TEST_IMAGES} title='photo-title' />)

  const rightArrowElement = container.querySelector('.bi-arrow-right-circle')
  fireEvent.click(rightArrowElement)
  fireEvent.click(rightArrowElement)

  expect(rightArrowElement).not.toBeInTheDocument()
})

it('expect the left arrow button to be gone if on image # 1 ', function () {
  const { container } = render(<Carousel photos={TEST_IMAGES} title='photo-title' />)

  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument()

  const leftArrowElement = container.querySelector('.bi-arrow-left-circle')

  expect(leftArrowElement).not.toBeInTheDocument()
})

