import React from 'react';
import { render,screen } from '@testing-library/react';
import Input from '../Component/Input';
import { expect } from 'vitest';
describe("Test scenario form", () => {
  test("renders the input component", () => {
    render(<Input type="text" placeholder="First Name" name="productName" label="First Name"  />);
    screen.debug();
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
  });
});
