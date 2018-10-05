import React from 'react';

const Results = props => (
  <div className='container'>
    <div className='row'>
      {props.results.map((result) =>{
        return (
          <div key={result.id} className="resultsBox">
                <ul className="listItems">
                  <li className="listItem"><a href={result.clone_url}>{result.name}</a></li>
                </ul>
          </div>
          );
        })} 
      </div>
   </div>
)

export default Results;
