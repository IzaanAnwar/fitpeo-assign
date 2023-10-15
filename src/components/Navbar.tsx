import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DorpDownExpandIcon from "@mui/icons-material/ReorderOutlined";
import { makeStyles } from "@mui/styles";

const Navbar = () => {
  return (
    <nav className="w-screen md:w-full  px-2 md:px-12 py-4 md:py-6 flex justify-between items-center ">
      <div className="flex max-w-fit justify-between">
        <h1 className="font-semibold text-base">Hello Shahrukh</h1>
        <span>&nbsp; 👋🏻 &#44;</span>
      </div>
      <span className="hidden md:block">
        <SearchForm />
      </span>
      <div className="sm:hidden">
        <DorpDownExpandIcon />
      </div>
    </nav>
  );
};

const useStyles = makeStyles(() => ({
  textField: {
    "& .MuiInputBase-input": {
      paddingTop: "8px",
      paddingBottom: "8px",
      border: "none !important",
    },
  },
}));
export const SearchForm = () => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
        className={classes.textField}
        sx={{ backgroundColor: "#FFFFFF", border: "none" }}
      />
    </div>
  );
};

export default Navbar;
