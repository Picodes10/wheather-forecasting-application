// eslint-disable-next-line no-unused-vars
import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  // fetches data from the entered value
  const handelOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handelOnChange}
    />
  );
};

export default search;
