import React from 'react';

const Form = props => (
  <form onSubmit={props.getResults}>
  <input className="formInput" type="text" name="searchQuery" />
  <button className="formButton">Search!</button>
  </form>
)

export default Form;