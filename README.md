# URL Shortener Service

A microservice built with Next.js to shorten URLs, track clicks, and provide usage statistics.

## Features

- Generate short URLs for long links
- Track clicks and usage statistics
- Customizable short URLs
- Built with modern web technologies

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router version)
- [MongoDB](https://www.mongodb.com/) (for storing URL mappings)
- [Mongoose](https://mongoosejs.com/) (for MongoDB interaction)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- MongoDB database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aliabdo6/url-shortener.git
   cd url-shortener
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

- `POST /api/shorten`: Create a new short URL

  - Body: `{ "url": "https://example.com", "custom": "optional-custom-slug" }`
  - Response: `{ "shortUrl": "generated-or-custom-slug" }`

- `GET /:shortUrl`: Redirect to the original URL and increment click count

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/Aliabdo6/url-shortener/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Contact

Ali Abdo - [@yourtwitter](https://twitter.com/yourtwitter) - aliabdo12121@outlook.sa

Project Link: [https://github.com/Aliabdo6/url-shortener](https://github.com/Aliabdo6/url-shortener)

```

Make sure to replace `"your_mongodb_connection_string"` with your actual MongoDB connection string and customize the contact details as necessary.
```
