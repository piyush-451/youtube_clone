import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div style={{height : "90vh", display : "flex" , alignItems : "center" , justifyContent : "center"}}>
      <CircularProgress />
    </div>
  )
}

export default Loader