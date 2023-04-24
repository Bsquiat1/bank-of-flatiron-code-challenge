Bank Transactions React App
This is a simple React app that displays a list of bank transactions. The app allows you to view and search through the list of transactions. You can also add new transactions and delete existing ones.

Getting Started
To get started with the app, first clone the repository:

bash
Copy code
git clone https://github.com/Bsquiat1/phase-2-code-challenge
Then, navigate to the project directory and install the dependencies:

bash
Copy code
cd phase-2-code-challenge
npm install
Next, start the local server for the JSON DB by running the following command:

bash
Copy code
json-server --watch db.json
The server will be running at http://localhost:3000/transactions. This is the endpoint from which the app will fetch the data.

Finally, start the app:

bash
Copy code
npm start
The app will be running at http://localhost:3000.

Features
The app has the following features:

Display a table of all transactions
Add a new transaction to the table
Delete a transaction from the table
Filter transactions by search term
Sort transactions alphabetically by category or description.

Written by:

Denis Were 