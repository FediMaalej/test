import React from 'react'
import CardLink from '../CardLink'

export default function EditLinks() {
  return (
    <div className="links_container">
      <div className="paragraphs">
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world
        </p>
      </div>
      <div className="add_link_btn">
        <button> + Add new link </button>
      </div>

      <div className="all_cards">
      <CardLink/>
      <CardLink/>
      <CardLink/>
      <CardLink/>
      <CardLink/>



      
        
      </div>
    </div>
  )
}
