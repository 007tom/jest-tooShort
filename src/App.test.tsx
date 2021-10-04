import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', async() => {
  render(<App />);
  
  const inputEle = screen.getByTestId("input-test-field");

  userEvent.type(inputEle, "a");
  // fireEvent.change(inputEle, { target: { value: "a" } });

  expect(inputEle).toHaveValue("a");
});
