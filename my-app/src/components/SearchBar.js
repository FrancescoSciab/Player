import { useState } from "react";
import { Highlighter, Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBar() {
  //   const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const props = {};

  const handleChange = () => {
    fetch(process.env.PUBLIC_URL + "/data.json")
      .then((response) => response.json())
      .then((data) => {
        //Library search algorithms need flattened data
        const flattenedData = [];
        data.forEach((artist) => {
          artist.albums.forEach((album) => {
            album.songs.forEach((song) => {
              flattenedData.push({
                artistName: artist.name,
                albumTitle: album.title,
                songTitle: song.title,
                songLength: song.length,
              });
            });
          });
        });
        setOptions(flattenedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const labelKey = (option) =>
    `${option.songTitle} - ${option.artistName} (${option.albumTitle})`;

  //It is the dropdown menu
  props.renderMenuItemChildren = (option, { text }) => (
    <>
      <Highlighter search={text}>{option.songTitle}</Highlighter>

      <div>
        <small>
          by <Highlighter search={text}>{option.artistName}</Highlighter> from
          the album
          <Highlighter search={text}>{` ${option.albumTitle}`}</Highlighter>
        </small>
      </div>
      <div>
        <small>Length: {option.songLength}</small>
      </div>
    </>
  );

  return (
    <>
      <Form.Group className="mx-5">
        <Form.Label>Search a song, album, artist</Form.Label>
        <Typeahead
          {...props}
          id="basic-typeahead-single"
          labelKey={labelKey}
          filterBy={["albumTitle", "artistName", "songLength", "songTitle"]}
          onInputChange={handleChange}
          options={options}
          placeholder="Search a song..."
          clearButton={true}
          size="lg"
          autoFocus={true}
          flip={true}
          minLength={1}
          //   selected={singleSelections}
        />
        <Form.Text className="text-muted">
          Results will be shown by song title, artist, and album.
        </Form.Text>
      </Form.Group>
    </>
  );
}
