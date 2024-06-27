import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
  return (
    <>
      <Form.Group>
        <Form.Label>Search your song</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          //   onChange={setSingleSelections}
          //   options={options}
          placeholder="Search a song..."
          //   selected={singleSelections}
        />
      </Form.Group>
    </>
  );
}
