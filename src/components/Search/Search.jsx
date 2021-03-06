import { TextField } from "@material-ui/core";

export const Search = (props) => {
  return (
    <div>
      <TextField
        onKeyPress={props.onSearch}
        onChange={props.onSearchChange}
        id="standard-basic"
        label={props.label}
        fullWidth
        value={props.search}
      />
    </div>
  );
};
