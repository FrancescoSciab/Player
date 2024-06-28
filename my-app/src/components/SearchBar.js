import { useState } from "react";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  //   const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const flattenedData = data.flatMap((band) =>
          band.albums.flatMap((album) =>
            album.songs.map((song) => ({
              bandName: band.title,
              albumTitle: album.title,
              songTitle: song.title,
              songLength: song.length,
            }))
          )
        );
        // console.log(`albums: ${albums}`);

        setOptions(flattenedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  const renderMenuItemChildren = (option) => {
    return (
      <>
        <span>
          <strong>{option.songTitle}</strong> by <em>{option.bandName}</em>
        </span>
        <div>
          <small>Album: {option.albumTitle}</small>
        </div>
        <div>
          <small>Length: {option.songLength}</small>
        </div>
      </>
    );
  };

  return (
    <>
      <Form.Group>
        <Form.Label>Search your song</Form.Label>

        <AsyncTypeahead
          id="basic-typeahead-single"
          labelKey="songTitle"
          filterBy={filterBy}
          isLoading={isLoading}
          onSearch={handleSearch}
          options={options}
          placeholder="Search a song..."
          //   selected={singleSelections}
          renderMenuItemChildren={renderMenuItemChildren}
        />
      </Form.Group>
    </>
  );
}
