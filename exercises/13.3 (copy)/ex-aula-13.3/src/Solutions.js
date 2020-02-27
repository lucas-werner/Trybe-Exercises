import React from 'react';
import { Link } from 'react-router-dom';
import './Solution.css';

function Solutions(props) {
  const solutionId = props.match.params.coxinha;
  console.log(solutionId)


  console.log(props);

  if (solutionId) return <h2>{solutionId}</h2>

  return (
    <div>
      <h1>Gabaritos</h1>
      {props.solutionsAvailable.map(solution => (
        <div key={solution}>
          <span>
            <Link className="solution-link" to={`/solutions/${solution}`}>{solution}</Link>
          </span>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Solutions;
