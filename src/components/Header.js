import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  tabs: {
    textDecoration: 'none',
    cursor: 'pointer',
    margin: "0 10px",
    color: '#ffffff',
    "&:hover": {
        color: '#cccccc',
        textDecoration: 'none',
    }
  }
}));

function Header(props) {
  const classes = useStyles();

  const sendKeyword = e => {
    console.log(e.target.value)
    props.parentCallback(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className={classes.tabs} variant="h6">
            Home
          </NavLink>

          <NavLink to="/product" className={classes.tabs} variant="h6">
            Products
          </NavLink>

          <NavLink to="/contact" className={classes.tabs} variant="h6">
            Contact
          </NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={sendKeyword}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    // <div>
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //         <div className="container-fluid">
    //             <div className="collapse navbar-collapse" id="navbarNav">
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item">
    //                         <Link to="/" className="nav-link active" aria-current="page">
    //                             Home
    //                         </Link>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to="/product" className="nav-link">
    //                             Product
    //                         </Link>
    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to="/contact" className="nav-link">
    //                             Contact
    //                         </Link>
    //                     </li>
    //                 </ul>

    //                 <Search parentCallback={props.parentCallback} />
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  );
}

export default Header;
