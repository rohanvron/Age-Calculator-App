# Age Calculator App

This repository contains the source code for an age calculator application that fulfills the requirements of the Frontend Mentor challenge: "View an age in years, months, and days after submitting a valid date through the form."

<p align="center">
  <img  src="./src/assets/images/ui1.PNG>
</p>

Check Out the <a href="https://rohanvron.github.io/Age-Calculator-App/"> DEMO </a>

# The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

<p align="center">
  <img  src="./src/assets/images/ui2.PNG>
</p>

**Features:**

* Calculates age based on a user-submitted date.
* Validates user input for empty fields, invalid dates, and out-of-range day/month values.
* Displays the calculated age in a clear and responsive layout using a media query or a CSS framework like Tailwind CSS.
* Implements hover and focus states for interactive elements (buttons, input fields).
* Used React Spring To Animate the age numbers to their final number when the form is submitted

**Technologies:**

- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [React Spring](https://www.react-spring.dev/) - Animation library
- HTML
- CSS
- JavaScript

## Installation and Setup
1. Clone the repository to your local machine using the command: `git clone https://github.com/rohanvron/Age-Calculator-App.git`
2. Navigate to the project directory: `cd Age-Calculator-App`
3. Install the necessary dependencies using npm or yarn: `npm install` or `yarn install`

## Dependencies

The project uses the following dependencies:
- [Vite + React](https://vitejs.dev)
- [React Spring](https://www.react-spring.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

Install Vite globally if you haven't already: `npm install -g create-vite@latest` or `yarn create vite@latest`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

if you’re looking to enhance it, here are a few suggestions:

* Implement dark/light mode theme switching (optional).
* Enhance user experience with additional animations or interactive features.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.