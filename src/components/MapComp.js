import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import MySlider from './MySlider'

function MapComp(props) {
  const {map} = props
  const [animated, setAnimated] = useState(true)
  const [year, setYear] = useState(map.yStart)

  useEffect(() => {
    setYear(map.yStart)
    setAnimated(true)
  }, [map])

  const getImage = (animated) => {
    try{
      if (animated) 
        return <img style = {{height: '60vmax', width: '81vmax', marginTop: '-7%', marginBottom: '0%'}} src = {require("../images/gifs/" + map.name + ".gif").default} alt = {`${map.name} Map Animated`}/>
      else 
        return <img style = {{height: '60vmax', width: '81vmax', marginTop: '-7%', marginBottom: '0%'}} src = {require("../images/" + map.name + "/" + year + ".png").default} alt = {`${map.name} Map ${year}`}/>
    }
    catch (e){
      console.log(e)
      return <div>Error Finding Image</div>
    }
  }

  return (
    <Container fluid>
      <Container style = {{width: '100%', maxWidth: '100%', height: '45vmax', overflow:'hidden' }} className = 'd-flex justify-content-center align-items-center'>
        {getImage(animated)}
      </Container>
      <MySlider
        animated = {animated}
        setAnimated = {setAnimated}
        year = {year}
        setYear = {setYear}
        map = {map}
      />
      <small>Data from <a href = {map.dataLink}>{map.dataFrom}</a></small>

      <Container style = {{width: '80vw'}} className = 'mt-5'>
        {map.text}
      </Container>
      
    </Container>
  )
}

export default MapComp