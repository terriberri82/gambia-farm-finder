# Gambia Farm Finder

A React application that helps users in The Gambia discover local farms 
in the West Coast Region. Users can search and filter farms by name, area, 
and produce type, view farm locations on an interactive map, save favorite 
farms, and add new farms to the directory.

## Dependencies
- **react-router** - handles client-side routing
- **@vis.gl/react-google-maps** - renders interactive maps (manipulates the DOM directly)

## API Services
This project uses two external services. You will need to create free accounts 
for both:
- **GitHub Gist** - hosts the farm data (public, no account needed)
- **Google Maps** - powers the interactive map (free account required)

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.local.example` to `.env.local`
4. Fill in your Google Maps API key in `.env.local`
5. Run `npm run dev`

## Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your own API keys.

## Future Features
- Search by plus code
- Filter by additional regions across The Gambia
- Filter by farm type
- Delete user-added farms
- Improve navigation experience between FarmDetailPage and search results so users are returned to their previous search results instead of a blank HomePage