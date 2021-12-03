import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="locationName">{location.name}</h3>
        <h4 className="locationAddress">{location.address}</h4>
        <div className="locationAddress">{location.squareFeet} square feet</div>
        <div className="locationHandicapAccesible">
        {location.handicapAccessible ? `Handicap Accessible` : ""}
        </div>
    </section>
)