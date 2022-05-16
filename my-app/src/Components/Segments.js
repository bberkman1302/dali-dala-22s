import React from 'react'
import Tableau from "tableau-react"

export default function Segments() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  const filters = {
  };

  const url_temp = "https://public.tableau.com/views/CategoryViz_Superstore/Categories1"
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
