# Backend

This is the backend for the AI server application. It uses Node.js, Express, and the OpenAI API to handle requests and generate responses.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```sh
    cd backend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a [`.env`](command:_github.copilot.openSymbolFromReferences?%5B%22.env%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cmanth%5C%5Cchatgpt-clone-app%5C%5Cbackend%5C%5C.gitignore%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fmanth%2Fchatgpt-clone-app%2Fbackend%2F.gitignore%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fmanth%2Fchatgpt-clone-app%2Fbackend%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A0%7D%7D%5D%5D "Go to definition") file in the root directory and add your OpenAI API key:

    ```env
    OPENAI_API_KEY=your_openai_api_key
    PORT=5000
    ```

### Running the Server

To start the server in development mode with hot-reloading:

```sh
npm run dev
```

The server will be running at [http://localhost:5000](http://localhost:5000).

## API Endpoints

### POST /chat

This endpoint generates a response to a given prompt.

#### Request

```json
{
  "prompt": "Quote of the day",
  "max_tokens": 100
}
```

- `prompt`: The input prompt for the AI model.
- `max_tokens`: The maximum number of tokens to generate in the response.

#### Response

```json
{
  "response": "Forrest Gump: \"Life is like a box of chocolates. You never know what you're gonna get.\""
}
```

- `response`: The generated response from the AI model.

## License

Distributed under the MIT License. See `LICENSE` for more information.
