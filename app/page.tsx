"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, custom }),
    });
    const data = await response.json();
    if (data.shortUrl) {
      setShortUrl(
        `${window.location.origin}/${data.shortUrl}`
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        URL Shortener
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          value={custom}
          onChange={(e) =>
            setCustom(e.target.value)
          }
          placeholder="Custom short URL (optional)"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Shorten URL
        </button>
      </form>
      {shortUrl && (
        <div className="mt-8">
          <p>Your shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </main>
  );
}
