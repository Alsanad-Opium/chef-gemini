# Chef Gemini

## Installation

1. Clone the repository:
```
git clone https://github.com/username/chef-claude.git
```

2. Install dependencies:
```
cd chef-gemini
pnpm install
```

3. Start the development server:
```
pnpm dev
```

## Usage

The application can be accessed at `http://localhost:5173/` in your web browser.

## API

The application uses the `@google/genai` library to interact with the Google AI API. The following functions are available:

```javascript
import { generateText, generateImage } from '@google/genai';

// Generate text
const prompt = 'Write a recipe for chocolate chip cookies';
const response = await generateText(prompt);
console.log(response);


```

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests, use the following command:

```
pnpm lint
```

This will run the ESLint linter on the codebase.