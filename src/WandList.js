import React from 'react'
import WandCard from "./WandCard";
function Wandlist(props)
{
    const wands=props.wands;
  const wandlist = wands.map(wand => (
    <WandCard
      wand={wand}
      key={`${wand.core}`}
    />
  ));
  return (
    <div className="wands">
      <h3>Wands</h3>
      <div className="row">{wandlist}</div>
    </div>
  );
}
export default Wandlist;