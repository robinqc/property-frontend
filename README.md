
# Property Frontend

A modern property listing web application built with [Next.js](https://nextjs.org), React, and Tailwind CSS. This project provides a beautiful interface for browsing, searching, and viewing real estate properties, with interactive maps, image carousels, and detailed property information.

## Features

- **Property Listings:** Browse featured properties in grid or list view.
- **Property Details:** View images, location map, and detailed info for each property.
- **Image Carousel:** Swipe through property photos.
- **Interactive Map:** See property location using Leaflet and OpenStreetMap.
- **Search & Filters:** Find properties by keywords (extendable).
- **Schedule a Visit:** Book a tour for a property.
- **Responsive Design:** Works great on desktop and mobile.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/))

### Installation

1. **Clone the repository:**
	```bash
	git clone https://github.com/robinqc/property-frontend.git
	cd property-frontend
	```

2. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```

3. **Configure API endpoint (optional):**
	- By default, the app uses `https://localhost:44364/api` for property data.
	- To use a different backend, set the environment variable in `.env.local`:
	  ```
	  NEXT_PUBLIC_API_URL=https://your-api-url/api
	  ```

### Running Locally

Start the development server:

```bash
npm run dev
# or

```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` — Next.js app directory (routing, pages)
- `src/components/` — UI components (cards, carousel, map, etc.)
- `src/api/` — API calls for property data
- `public/` — Static assets
- `fixtures/` — Sample property data (for development/testing)
