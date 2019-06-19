import React, { useState } from "react"
import styled from "styled-components"
import { setFlex, setColor } from "../../pages/styles"
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl"
import PinIcon from "../../images/map-marker.png"

const MapContainer = styled.div`
  ${setFlex()}
  margin: 0px, 20px;
  border-top: 6px solid #3f5588;
  border-bottom: 6px solid #3f5588;
`
const NavControl = styled.div`
  top: 10px;
  left: 10px;
  position: absolute;
`

const Icon = styled.img`
  height: 40px;
  width: 40px;
`

const initial_viewport = {
  latitude: 48.518382,
  longitude: 11.498807,
  zoom: 14,
}

const Map = ({ classes }) => {
  const [viewport, setViewport] = useState(initial_viewport)
  return (
    <MapContainer>
      <ReactMapGL
        width="100vw"
        height="500px"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoicmFkbWlsYW5pIiwiYSI6ImNqeDJ5Z2VsZzBuanQ0YXBrbzU2MXZwYjQifQ.UnxZPoJiErRHO5vVv_PHow"
        onViewportChange={newViewport => setViewport(newViewport)}
        {...viewport}
      >
        <NavControl>
          <NavigationControl
            onViewportChange={newViewport => setViewport(newViewport)}
          />
        </NavControl>
        <Marker latitude={48.518382} longitude={11.498807}>
          <Icon src={PinIcon} />
        </Marker>
      </ReactMapGL>
    </MapContainer>
  )
}

export default Map
