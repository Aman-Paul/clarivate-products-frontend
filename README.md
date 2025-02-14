# Clarivate Products Frontend

## Overview
Clarivate Products Frontend is a React-based application designed to manage and display products efficiently. This project is structured for scalability and maintainability, making it easy to integrate with backend APIs.

## Features
- Display a list of products
- Pagination for efficient data loading
- Category-wise product management
- Responsive UI
- Integration with a backend API

## Tech Stack
- **React.js** - Frontend framework
- **Bootstrap** - Styling framework
- **Axios** - HTTP requests

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v22 or later)
- npm or yarn
- Make sure the backend i.e. `clarivate-products-backend` is running

### Steps to Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Aman-Paul/clarivate-products-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd clarivate-products-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
5. Open your browser and go to `http://localhost:3000`

## Project Structure
```
clarivate-products-frontend/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   |            |Navbar.jsx/     # Navigation bar
│   |            |ProductList.jsx/     # Products List table
│   ├── App.js          # Main app entry
│   ├── index.js        # React DOM entry point
│   ├── index.css       # Global styles
│   ├── App.css         # App-specific styles
├── .env                # Environment variables
├── .env.example
├── .gitignore
├── package.json
├── README.md
```

## Contribution
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push to your forked repository.
5. Create a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or contributions, feel free to reach out:
- **Author:** Aman Paul
- **GitHub:** [Aman-Paul](https://github.com/Aman-Paul)
- **Email:** amanpaul155@gmail.com

