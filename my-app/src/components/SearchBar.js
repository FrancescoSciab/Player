import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;
  return (
    <>
      <Form.Group>
        <Form.Label>Search your song</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          filterBy={filterBy}
          //   onChange={setSingleSelections}
          options={options}
          placeholder="Search a song..."
          //   selected={singleSelections}
        />
      </Form.Group>
    </>
  );
}
