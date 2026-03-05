import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {

  test("counter displays the correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const counterElement = getByTestId("count");
    expect(counterElement.textContent.trim()).toBe("0");
  });
  

  test("increment button increases the count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const incrementBtn = getByTestId("increment");
    const counterElement = getByTestId("count");

    fireEvent.click(incrementBtn);
    expect(counterElement.textContent.trim()).toBe("1");
  });

  test("decrement button decreases the count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const decrementBtn = getByTestId("decrement");
    const counterElement = getByTestId("count");

    fireEvent.click(decrementBtn);
    expect(counterElement.textContent.trim()).toBe("-1");
  });

  test("restart button resets the count", () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const incrementBtn = getByTestId("increment");
    const restartBtn = getByTestId("restart");
    const counterElement = getByTestId("count");

    fireEvent.click(incrementBtn);
    fireEvent.click(restartBtn);
    expect(counterElement.textContent.trim()).toBe("5");
  });

  test("switch button multiplies count by -1", () => {
    const { getByTestId } = render(<Counter initialCount={3} />);
    const switchBtn = getByTestId("switch");
    const counterElement = getByTestId("count");

    fireEvent.click(switchBtn);
    expect(counterElement.textContent.trim()).toBe("-3");

    fireEvent.click(switchBtn);
    expect(counterElement.textContent.trim()).toBe("3");
  });
  test("swap button swaps count with backup value", () => {
    const { getByTestId } = render(<Counter initialCount={5} backupCount={10} />);
    const swapBtn = getByTestId("swap");
    const counterElement = getByTestId("count");

    expect(counterElement.textContent.trim()).toBe("5");

    fireEvent.click(swapBtn);
    expect(counterElement.textContent.trim()).toBe("10");

    fireEvent.click(swapBtn);
    expect(counterElement.textContent.trim()).toBe("5");
  });

  test("combined operations: increment, decrement, switch", () => {
    const { getByTestId } = render(<Counter initialCount={2} />);
    const incrementBtn = getByTestId("increment");
    const decrementBtn = getByTestId("decrement");
    const switchBtn = getByTestId("switch");
    const counterElement = getByTestId("count");
  
    // Increment once: 2 -> 3
    fireEvent.click(incrementBtn);
    expect(counterElement.textContent.trim()).toBe("3");
  
    // Decrement twice: 3 -> 2 -> 1
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(counterElement.textContent.trim()).toBe("1");
  
    // Switch: 1 -> -1
    fireEvent.click(switchBtn);
    expect(counterElement.textContent.trim()).toBe("-1");
  
    // Increment after switch: -1 -> 0
    fireEvent.click(incrementBtn);
    expect(counterElement.textContent.trim()).toBe("0");
  
    // Decrement after switch: 0 -> -1
    fireEvent.click(decrementBtn);
    expect(counterElement.textContent.trim()).toBe("-1");
  });
});