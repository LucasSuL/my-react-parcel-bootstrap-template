# Parcel Template using React.js

A simple template ready for Parcel.js built with React.js

Inspired from Bob Ziroll with his tutorial on [freecodecamp](https://www.freecodecamp.org/news/how-to-up-a-react-app-with-parcel/).

Adding Bootstrap styles and basic components including originate Bootstrap Navbar, Card and a self-made footer ready to use.

## Getting Started

To run the project locally, follow these steps:

1. **Create a new folder for your project**
   - Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. **Create your `package.json` file**
   - In the terminal, navigate to the new project's root folder using cd and then run:
     
     ```bash
     npm init -y
     ```
     This automatically creates the `package.json` file.

3. **Install Parcel, React, and ReactDOM**
   - Install Parcel

       
     ```bash
     npm install --save-dev parcel-bundler
     ```
   - Install React and ReactDOM

       
     ```bash
     npm install react react-dom
     ```
4. **Create necessary files in your project folder**
   - In the `package.json` file, in the "scripts" section, add the following "start" script:
     
     ```bash
     "start": "parcel index.html --open"
     ```
   - Or you can just copy and paste all the files in the repository to the project folder and replace `package.json`

5. **Start it up!**
   - Now from the terminal, run:
     
     ```bash
     npm start
     ```
   - Parcel will handle the rest, and you'll have a fully-functional React app.

## License

This project is licensed under the MIT License.

Feel free to customize it further based on your project's specific details and needs.



