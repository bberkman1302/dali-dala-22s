import React from 'react'
import Tableau from "tableau-react"

export default function Map() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };


  const url_temp = "https://public.tableau.com/views/StateViz_Superstore/Map1"
  return (
    <div className = "Container">
      <Tableau 
        url= {url_temp}
        options={options}
      />
    </div>
  )
}
