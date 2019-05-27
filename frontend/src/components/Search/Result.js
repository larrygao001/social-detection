import React from 'react';
import './result.css';

export default ({result}) => {
  return (
    Object.entries(result).map((item,i)=>{
        return <div key={i}>
            <h5><a className= "result-title" href={item[1][1]}>{item[1][0]}</a></h5>
            <p className="result-link">{item[1][1]}</p>
            <p className="result-description" >{item[1][2]}</p>
        </div>
    })
  )
}
