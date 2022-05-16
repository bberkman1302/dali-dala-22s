import React from 'react'
import Tableau from "tableau-react"

export default function Seasons() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  const filters = {
  };

  const url_temp = "https://public.tableau.com/views/SeasonalViz_Superstore/Seasonal"
  return (
    <div className = "Container">
      <Tableau 
        url= {url_temp}
        options={options}
        filters = {filters}
      />
    </div>
  )
}
