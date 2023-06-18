import React from 'react'
import { useLocation, useParams } from 'react-router'

const Details = () => {
  // const { id } = useParams();
  // const data = useLocation();
  // console.log(id);
  // console.log(data);

  // const { state } = useLocation();
  const { id } = useParams();
  const { state } = useLocation();
  console.log(id);

  const { strYoutube } = state;
  const key = strYoutube.split('=')[1];



  return (
    <div>
      {/* <h1>{state.name}</h1>
      <img src={state.image} alt="sdaf" />
      <p>{state.detail.substring(0, 5) + "...."}</p> */}

      <iframe title='asd' height="500px" width="500px" src={`https://www.youtube.com/embed/${key}?rel=0`} allowFullScreen allow="accelerometer; clipboard write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default Details
