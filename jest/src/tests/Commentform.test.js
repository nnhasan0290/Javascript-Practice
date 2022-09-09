import { render, screen,fireEvent } from "@testing-library/react";
import CommentFrom from "../components/CommentFrom";

test("initial condition",() => {
    render(<CommentFrom/>)
    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("i agree to the terms and conditions",{exact: false});
    expect(checkbox).toBeInTheDocument();
    const submitButton = screen.getByRole("button", {name: "Comment", exact: false});
    expect (submitButton).toBeDisabled();
})

test("enable submit  when button is clicked", () => {
    render(<CommentFrom/>)
    const submitButton = screen.getByRole("button", {name: "Comment", exact: false});
    const checkbox = screen.getByLabelText("i agree to the terms and conditions",{exact: false});
    const commentInput = screen.getByRole("textbox");

    fireEvent.change(commentInput,{target:{value:"something"}})
    fireEvent.click(checkbox)

    expect(submitButton).toBeEnabled();

    fireEvent.click(checkbox)
    expect(submitButton).toBeDisabled();
})