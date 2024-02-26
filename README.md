# Morse_Code

## SETUP

### Backend

- Install the required packages using the following command:
  ```
  pip install -r requirements.txt
  ```
- Run the following command to start the server:
  ```
  uvicorn main:app --workers 8
  ```

### Frontend

- Install nodejs and npm in your OS
- Open the client directory in terminal and run the following command:
  ```
  npm install
  ```
  - Run the following command to start the server:
  ```
  npm build && npm start
  ```
  !! note: Run `npm run dev` to start the server in development mode