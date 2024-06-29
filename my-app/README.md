# Player - Songs Search React App

This is a simple Minimal React application that provides an autocomplete search box for searching songs, albums, and artists. The primary component of this application is the SearchBar component with an autocomplete functionality.

# Usage

The main feature of this application is the autocomplete search functionality for songs, albums, and artists.

- Search for Songs: Start typing the name of a song in the search bar, and it will display matching results.
- Search for Albums: Similarly, you can search for albums by their titles.
- Search for Artists: You can also search by artist names.
  Results will be shown by song title, artist, and album.

# Technical explanation

The app uses react-bootstrap-typeahead npm package which provides an autocomplete or typeahead component for React applications. It's designed to handle large datasets efficiently and provides various features for filtering and displaying data from a JSON source.

- Fetching Data:

On input change, it fetches data from data.json located in the public directory.
The fetched data is flattened to ensure it is suitable for the search algorithm used by the Typeahead component.

- State Management:

The component uses the useState hook to manage the state of the options available for autocomplete.

- Filtering
  filterby prop specifies which fields in the options array to filter against when the user types in the search input.

- Rendering Options:

The labelKey function determines how each option is displayed in the dropdown.
The renderMenuItemChildren prop customizes the rendering of each item in the dropdown to include the song title, artist name, album title, and song length, with matching text highlighted.

# App link

The App can be used by clicking this [link](francescosciab.github.io/Player/)
[Github](https://github.com/FrancescoSciab/Player)
