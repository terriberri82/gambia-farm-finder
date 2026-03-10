# Gambia Farm Finder

A React application that helps users in The Gambia discover local farms 
in the West Coast Region. Users can search and filter farms by name, area, 
and produce type, view farm locations on an interactive map, save favorite 
farms, and add new farms to the directory.

## Dependencies
- **react-router** - handles client-side routing
- **@vis.gl/react-google-maps** - renders interactive maps (manipulates the DOM directly)
- leaflet – open-source library for rendering interactive maps

## API Services
This project uses two external services. 
- **GitHub Gist** - hosts the farm data (public, no account needed)
- **Leaflet** - Leaflet uses OpenStreetMap tiles to display the map, so no API key is required.

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.local.example` to `.env.local`
4. Fill in your Google Maps API key in `.env.local`
5. Run `npm run dev`

## Environment Variables
Create a .env.local file and add:
VITE_GIST_URL=your_github_gist_url

## Features
- Search farms by name
- Filter farms by area or produce
- View farm locations on an interactive map
- Save favorite farms

## Future Features
- Search by plus code
- Add new farms to the directory
- Filter by additional regions across The Gambia
- Filter by farm type
- Delete user-added farms
- Improve navigation experience between FarmDetailPage and search results so users are returned to their previous search results instead of a blank HomePage