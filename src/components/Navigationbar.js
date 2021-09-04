import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'


function Navigationbar(props) {
  const {maps, setMap, map} = props
  
  const handleClick = (m) =>{
    setMap(m)
  }
  return (
    <Container style = {{backgroundColor: '#afb8c9'}} fluid>
    <Row>
      <Col 
        style = {{width: '40vw'}} 
        md = '1'
        className = 'd-flex justify-content-center my-2 mt-3'
      > 
        <button className = 'myButton'>
        <h4 onClick = {() => handleClick(null)}>Environmental Maps Progression</h4>
        </button>
      </Col>
        <Container fluid style = {{width: '60vw', overflowX: 'auto'}} className = 'd-flex justify-content-right'>
        {maps.map( (m) => 
        // creates a button for each map type
          <Col key = {m.id} className = 'px-0 mx-0'>
            <button onClick = {() => handleClick(m)} className = {`myButton${m==map?'Selected':''}`} >{m.name}</button>
          </Col>
        )}
        </Container>
    </Row>
    </Container>
  )
}

export default Navigationbar
