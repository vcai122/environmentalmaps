import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/Navigationbar';
import MapComp from './components/MapComp';
import Home from './components/Home';

const maps = [
  {
    id: 0,
    name: 'Carbon',
    yStart: 1751,
    yEnd: 2013,
    dataFrom: 'CDIAC',
    dataLink: 'https://cdiac.ess-dive.lbl.gov/epubs/ndp/ndp058/ndp058_v2016.html',
    // text: <p>This map shows a time series of the total carbon emission from 1751 to 2013 with grids of 1° latitude by 1° longitude. In this time the total carbon emission increased from 2.55 Tg C to 9233.63 Tg C (equivalent to , a 360,000% increase! Carbon dioxide is one of the primary greenhouse gases and in 2019, made up of 80% of emissions from the U.S. Although, there are many sources of carbon, there’s no doubt that human activities have become the main contributor of the increase in carbon emissions, with fossil fuels being the primary culprit. Read more about carbon emissions and greenhouse gases <a href = "https://www.epa.gov/ghgemissions/overview-greenhouse-gases#carbon-dioxide">here</a>.</p>,
    text: 
      <>
      <p className = 'textExplanation'>This map shows a time series of the total carbon emission from 1751 to 2013 with grids of 1° latitude by 1° longitude. In this time the total carbon emission increased from 2.55 Tg C to 9233.63 Tg C (equivalent to , a 360,000% increase! Carbon dioxide is one of the primary greenhouse gases and in 2019, made up of 80% of emissions from the U.S. Although, there are many sources of carbon, there’s no doubt that human activities have become the main contributor of the increase in carbon emissions. From the map, we can see the first emergences of carbon emissions following the industrial revolution in Europe, and very recently the large increase in emissions from China starting in the 1960s as they industrialized. </p>
      <p className = 'textExplanation'> The leading contributor to carbon dioxide emission is the consumption of fossil fuels with emissions from transportation and electricity being the largest sectors within that category (both making up over 30% of total carbon emission in the U.S.). To lower these emissions, cleaner sources of energy (such as solar, hydroelectric, wind) can be used, and people can look to use alternative methods of transportation (walking, biking) more. </p>
      <p >Information from U.S. Environmental Protection Agency. Click <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#carbon-dioxide">here</a> to learn more.</p>
      <p >Or click <a href="https://www.futurelearn.com/info/blog/how-to-reduce-your-carbon-footprint-tips">here</a> to read more about how you can lower your carbon footprint.</p>
      </>
    ,
    sliderMargin: '-4vh',
  }, 
  {
    id: 1,
    name: 'Land Change',
    yStart: 1771,
    yEnd: 2008,
    dataFrom: 'NOAA',
    dataLink: 'https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C00814',
    // text: <p>This map shows a time series of the dominant land features and land use from 1771 to 2008 with grids of 1° latitude by 1° longitude. For each grid, the feature that is most prominent is shown. This map tracks the changes that occurred as people progressed through the past centuries, replacing vegetation with pastureland, cropland, and urban land. The map allows us to see what has changed (such as the U.S.) and what has remained relatively untouched (such as Northern Africa), and understand the impact that humans have had on the land around us. Read more about the impacts of urbanization <a href = "https://www.nationalgeographic.com/environment/article/urban-threats">here</a>, or about deforestation <a href = "https://youmatter.world/en/definition/definitions-what-is-definition-deforestation-causes-effects/">here</a>.</p>,
    text: 
      <>
        <p className = 'textExplanation'>This map shows a time series of the dominant land features and land use from 1771 to 2008 with grids of 1° latitude by 1° longitude. For each grid, the feature that is most prominent is shown. This map tracks the changes that occurred as people progressed through the past centuries, replacing vegetation with pastureland, cropland, and urban land. The map allows us to see what has changed (such as the U.S.) and what has remained relatively untouched (such as Northern Africa), and understand the impact that humans have had on the land around us. </p>
        <p className = 'textExplanation'>The impacts of human urbanization are numerous, which means we must be careful in the way we approach it. These include impacts include concentrated energy consumption, which can lead to increases in air pollution, increased exhaust in urban air, unsafe urban development, which can lead to environmental risks such as floods, as well as the impacts it has on animal and vegetation. </p>
        <p className = 'textExplanation'>Industrial agriculture can also have an impact, and is responsible for about 80% of deforestation as a large amount of space is required for the crops, animals, and the animals’ food. Deforestation has deep ramifications on biodiversity, local people, climate change, food growth in the future, and more.</p>
        <p >Information about urbanization from National Geographic. Click <a href = "https://www.nationalgeographic.com/environment/article/urban-threats">here</a> to learn more.</p>
        <p >Information about deforestation from Youmatter.World. Click <a href = "https://youmatter.world/en/definition/definitions-what-is-definition-deforestation-causes-effects/">here</a> to learn more.</p>
      </>
    ,  
    sliderMargin: '3vh'
  }, 
  {
    id: 2,
    name: 'Aerosol',
    yStart: 1982,
    yEnd: 2009,
    dataFrom: 'NASA',
    dataLink: 'https://gacp.giss.nasa.gov/data/time_ser/',
    // text: <p>This map shows a time series of the yearly average of aerosol amounts from 1982 to 2009 with grids of 1° latitude by 1° longitude. Aerosol is suspended particles of solid or liquid in gas and can be natural or human-induced. Natural aerosols can include fog or mist, while aerosol from human activities can include pollutant gas, sulfur dioxide, and smoke, most of which are largely caused by industrialization. This map shows very little change in aerosol amounts from 1982 to 2009, however, a larger time period may show better results. Read more about the impacts of Aerosol on our environment <a href = "https://earthobservatory.nasa.gov/features/Aerosols">here</a>.</p>,
    text: 
      <>
        <p className = 'textExplanation'>This map shows a time series of the yearly average of aerosol amounts from 1982 to 2009 with grids of 1° latitude by 1° longitude. Aerosol is suspended particles of solid or liquid in gas and can be natural or human-induced. Natural aerosols can include fog or mist, while aerosol from human activities can include pollutant gas, sulfur dioxide, and smoke, most of which are largely caused by industrialization. This map shows very little change in aerosol amounts from 1982 to 2009, however, a larger time period may show better results. </p>
        <p className = 'textExplanation'>Aerosol reflectivity of sunlight often depends on the color and/or make up of the particle. Typically, lighter and brighter particles can reflect radiation, while darker particles, such as black carbon (formed by incomplete combustion of fuels such as fossil fuels) absorb radiation and a thus has a warming effect on the planet. As such, aerosol can impact the environment heavily. For example in 1991 when Mount Pinatubo in the Philippines erupted, the eruption led to the formation of such a large quantity of sulfate aerosol in the air that remained above the clouds, scattering light, for several years.</p>
        <p >Information from NASA Earth Observatory. Click <a href = "https://earthobservatory.nasa.gov/features/Aerosols">here</a> to learn more.</p>
      </>
    ,  
    sliderMargin: '-4vh'
  },
  {
    id: 3,
    name: 'Temperature',
    yStart: 1850,
    yEnd: 2020,
    dataFrom: 'NOAA',
    dataLink: 'https://psl.noaa.gov/data/gridded/data.crutem4.html#plot',
    // text: <p>This map shows a time series of the yearly average of temperature anomalies from 1850 to 2020 with grids of 5° latitude by 5° longitude. Note that since only anomalies are recorded and the values are yearly averages, this explains why the average temperatures comes out to be far below 273 K. From the map we see a clear rise in global temperatures which is a direct result of greenhouse gas emissions and the greenhouse gas effect. 2006-2015 marked the warmest decade on record! Read more about rising global temperatures <a href = "https://climatechange.ucdavis.edu/climate-change-definitions/rising-temperatures-heat-can-act-video/">here</a>.</p>,
    text: 
      <>
        <p className = 'textExplanation'>This map shows a time series of the yearly average of temperature anomalies from 1850 to 2020 with grids of 5° latitude by 5° longitude. Note that since only anomalies are recorded and the values are yearly averages, this explains why the average temperatures comes out to be far below 273 K. From the map we see a clear rise in global temperatures which is a direct result of greenhouse gas emissions and the greenhouse gas effect.</p>
        <p className = 'textExplanation'>Since 1901 the atmosphere has warmed an average of 0.15 degrees Fahrenheit per decade, with 2006-2015 marking the warmest decade on record! In the future, scientists predict Earth’s surface temperature will increase at least 1 degree Fahrenheit by the end of the century, and it will continue to rise as long as greenhouse gas emissions continue. While some areas of the earth may be less drastic than others (or even cooling), this is due to wind and ocean patters, dictated by global cycles—not because the earth is not warming. Impacts of rising temperatures can include extreme weather events such as heat waves, changes in animal habitats (which can lead to endangered species), extreme droughts that make land inhabitable, and of course the melting ice caps and sea level rising.</p>
        <p>Information from UC Davis’s Science and Climate. Click <a href = "https://climatechange.ucdavis.edu/climate-change-definitions/rising-temperatures-heat-can-act-video/">here</a> to learn more.</p>
        <p>Or click <a href = "https://www.environment.gov.au/climate-change/climate-science-data/climate-science/greenhouse-effect#:~:text=The%20greenhouse%20effect%20is%20a,re%2Dradiated%20by%20greenhouse%20gases.&text=The%20absorbed%20energy%20warms%20the%20atmosphere%20and%20the%20surface%20of%20the%20Earth.">here</a> to learn about the greenhouse gas effect.</p>
      </>
    ,  
    sliderMargin: '-4vh'
  },
]
function App() {
  const [map, setMap] = useState(null) //map is the current map being shown

  return (
    <div className="App">
        <Navigationbar
          maps = {maps}
          setMap = {setMap}
          map = {map}
        />
        {map? 
          <MapComp
            map = {map}
          />
          :
          <Home/>
        }
    </div>
  );
}

export default App;
