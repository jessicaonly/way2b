import React from 'react';

const Results = props => (
  <div className='container'>
    <div className='row'>

      {props.results.map((result) =>{
        return (
          <div key={result.id}>
            <div className="resultsBox">
              <img src={result.owner.avatar_url}
                alt={result.owner.login}/>
              <div className="reposList">
                <ul className="listItems">
                <li className="listItem">{result.name}</li>
                </ul>
               </div> 
            </div>
          </div>
          );
        })} 
      </div>
      </div>
)

export default Results;
