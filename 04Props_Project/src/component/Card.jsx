import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function Card ({data}) {
  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
            <img src={data.img} alt={data.compName} />
            <button><FontAwesomeIcon icon={faBookmark} /></button>
          </div>

          <div className="center">
            <h3>
              {data.compName} <span>{data.time}</span>
            </h3>

            <h2>{data.position}</h2>

            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{data.pay}</h3>
            <p>{data.location}</p>
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
