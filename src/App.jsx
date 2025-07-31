
import React from 'react';
import Header from './components/header1';
import './App.css';
import Airquality from './components/airqualitycontainer';
import Weeklyweather from './components/weeklycontainer';
import Searchbars from './components/searchbar';
import Card from './components/cards';
import Sunriseset from './components/sunrisesunset';
import Info from './components/infocontainer';
import Selection from './components/select';
import Sunny from './components/sunnycard';
import Pinkdiv from './components/pinyellowdiv';

function App() {
  return (
    <>
      <div className="whole_container">

        <div className="main_container">
          <Header />
          <Weeklyweather />
          <div id="container">
            <div id="whole_air_container">
              <Airquality />
              <div className="card">
                <div className="header">
                  <div className="title">Monthly Rainfall</div>
                  <div className="legend">
                    <span>
                      <div className="dot rain-dot"></div> Rain
                    </span>
                    <span>
                      <div className="dot sun-dot"></div> Sun
                    </span>
                  </div>
                </div>
                <Card />
              </div>
            </div>
            <div id="sunrise_container">
              <h2 style={{ fontSize: '17px' }}>Sunrise & Sunset</h2>
              <Sunriseset />
              <Sunriseset />
              <Info />
            </div>
          </div>
        </div>
        <div className="total">
          <Searchbars />
          <Sunny />
          <div className="pink_div" id="pink">
            <Pinkdiv />
            <div className="pink_location_total">
              <div className="pink_location">
                <img className="pink_location_img" src="./images/gps.png" alt="location icon" />
              </div>
              <div className="pink_tem">
                <Selection />
                <div className="pink_heading">
                  <h3>26°C</h3>
                </div>
              </div>
            </div>

          </div>
          <div className="pink_div" id="yellow">
            <Pinkdiv />
            <div className="pink_location_total">
              <div className="pink_location">
                <img className="pink_location_img" src="./images/gps.png" alt="location icon" />
              </div>
              <div className="pink_tem">
                <Selection />
                <div className="pink_heading">
                  <h3>26°C</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
