import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import Login from "./pages/Login";
import '@testing-library/jest-dom'
import Signup from "../pages/SignUp";

test("Sign In component rendering Sucessfully", () => {
    const element = document.createElement("div");
     expect(element).not.toBeNull();
  render(<SignUp />);
  const someElement = screen.getByText("SignIn");
  expect(someElement).toBeInTheDocument();
});