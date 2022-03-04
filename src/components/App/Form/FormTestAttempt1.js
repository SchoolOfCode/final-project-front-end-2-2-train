import React from "react";
import {
   render,
   screen,
   waitFor,
   within,
   cleanup,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "./index";

// afterEach(cleanup);

// it("should be displayed", () => {
//    render(<Form />);
//    const FormElement = screen.getByRole("");
//    expect(asFragment(<Form />)).toMatchSnapshot();
// });


afterEach(cleanup);
describe("Form", () => {
   const onSubmit = jest.fn();

   beforeEach(() => {
      onSubmit.mockClear();
   });

   render(<Form onSubmit={onSubmit} />);

   it("onSubmit is called when all fields pass validation", async () => {
      user.type(getImage(), "Image");
      user.type(getTitle(), "Holiday");

      user.type(getLocation(), "London");

      user.type(getDate(), "1201202");

      user.type(getNote(), "lovely hot holiday");

      clickSubmitButton();

      await waitFor(() => {
         expect(onSubmit).toHaveBeenCalledWith({
            image: "Image",
            title: "Holiday",
            location: "London",
            date: "1201202",
            note: "lovely hot holiday",
         });
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);
   });
});

function getImage() {
   return screen.getByPlaceholderText(/image/i);
}

function getTitle() {
   return screen.getByPlaceholderText(/title/i);
}

function getLocation() {
   return screen.getByPlaceholderText(/location/i);
}

function getDate() {
   return screen.getByPlaceholderText(/date/i);
}

function getNote() {
   return screen.getByPlaceholderText(/note/i);
}

function clickSubmitButton() {
   user.click(screen.getByRole("button", { name: /submit/i }));
}
