// app/javascript/components/Greeting.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomGreeting } from "../store/actions";

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    // Fetch the random greeting on component mount
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomGreeting: state.randomGreeting,
  };
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
