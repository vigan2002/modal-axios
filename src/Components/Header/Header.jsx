import React from 'react';
import PropTypes from "prop-types";
import "./header.scss";

const Header = (props) => {
  const style = props.bg ? { backgroundImage: `url(${props.bg})` } : {};
  
  return (
    <div className="header" style={style}>
        <h1>{props.title}</h1>
        <p>{props.dec}</p>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dec: PropTypes.string,
}

Header.defaultProps = {
    dec: "This is our shop page!"
}

export default Header;
