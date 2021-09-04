import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <Container style = {{width: '70vw', height: '70vh'}} className = 'mt-5'>
      <Row>
        <h2>Introduction</h2>
      </Row>
      <Row>
      <body>
        <p className = 'paragraph'>
          This project was created for CharterHacks with the intention of showing how the earth has changed over the past centuries due to human activities. The maps are created with Matplotlib and Python using sets of gridded time series data obtained from various sources which are processed into yearly maps. As such, this provides an effective visual for the environmental changes on global scale over the past centuries. 
        </p>
        <p className = 'paragraph'>
          Most notably, the maps for Carbon emission and Land Change show very clearly the changes that have occurred over time due to human activities. In each, we see high amounts of carbon emission and urban land respectively emerge in places of high human activity (especially in the U.S. and China). Carbon emission over this time period grew from 2.55 Tg C to 9233.63 Tg C, an increase of over 360,000%. Similarly urban land increased over 6000% from 1771 to 2008. Clearly, humans are driving the environment change on an unprecedented scale—it’s time to make a change!
        </p>
      </body>
      </Row>
    </Container>
  )
}

export default Home
