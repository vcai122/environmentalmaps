import React, {useMemo} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const iOSBoxShadow =
'0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

function MySlider(props) {
  const {animated, setAnimated, year, setYear, map} = props

  const trackColor = animated? "grey" : "black"

  const IOSSlider = useMemo(() => {
    return withStyles({
      root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
      },
      thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: iOSBoxShadow,
          },
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
          background: 'transparent',
          color: '#000',
        },
      },
      track: {
        height: 10,
        backgroundColor: trackColor
      },
      rail: {
        height: 10,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
      },
      mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        // marginTop: -3,
      },
      markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    })(Slider);
  }, [animated])

  
  const handleSliderChange = (e, v) => {
    if (animated) return
    // console.log(v)
    setYear(v)
  }

  // const sliderColor = animated? 'grey' : 'black'
  
  return (
    <Container style = {{width: '60vmax', marginTop: map.sliderMargin}}>
      <Row>
        <Col className = 'd-flex justify-content-center align-items-center pt-1' style = {{width: '7em', background: 'white'}} xs = {1}> 
          <small className = 'px-1 pb-1'> Animated </small>
          <Form.Check style = {{zIndex: 2}} type="checkbox" checked = {animated} onChange = {() => setAnimated(prev => !prev)}/>
        </Col>
        <Col>
          <IOSSlider aria-label="ios slider" value={year} onChange = {handleSliderChange} valueLabelDisplay="on" min = {map.yStart} max = {map.yEnd}/>
        </Col>
      </Row>
    </Container>
    )
}

export default MySlider
