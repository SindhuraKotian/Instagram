import React from 'react';
import "./Homepage.css";
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div class ='homepage'>
        <div class="homepage__nav">
          <Sidenav/>                  
        </div>

        <div class="homepage__timeline">
          <Timeline/>
        </div>

    </div>
  )
}

export default Homepage