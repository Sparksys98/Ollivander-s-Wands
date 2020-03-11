import React from 'react'

function WandCard(props)
{
    const wand=props.wand;
    return (
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={wand.imageUrl}
                alt={wand.core}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>{wand.core}</span>
              </h5>
              <h5 className="card-title">
                <span>{wand.wood}</span>
              </h5>
              <small className="card-text">{wand.length} cm</small>
            </div>
          </div>
        </div>
      );

}
export default WandCard;