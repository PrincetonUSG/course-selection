import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { ajaxSetup } from 'AjaxSetup';
import { ThemeProvider } from 'styled-components';
import { COURSESELECTION_THEME } from 'styles/theme';
import '../../styles/CourseList.css';
import HourBox from './HourBox';
import DayBox from './DayBox';

const DayColumn = (props) => {
  ajaxSetup();
  const [profile, setProfile] = useState(null);
  const day = props.day;

  useEffect(() => {
    fetchProfile();
  }, []);
  console.log('Displaying Course', props.course);

  // Example API request
  const fetchProfile = () => {
    $.ajax({
      url: '/api/v1/get_profile/',
      datatype: 'json',
      type: 'GET',
      success: (profile) => setProfile({ profile }),
    });
  };

  return (
    <div>
      <DayBox dotw={day}/>
      <HourBox time={"8am"}/>
      <div className="course"></div>
      <HourBox time={"9am"}/>
      <HourBox time={"10am"}/> 
      <HourBox time={"11am"}/>
      <HourBox time={"12pm"}/>
      <HourBox time={"1pm"}/>
      <HourBox time={"2pm"}/>
      <HourBox time={"3pm"}/>
      <HourBox time={"4pm"}/>
      <HourBox time={"5pm"}/>
      <HourBox time={"6pm"}/>
      <HourBox time={"7pm"}/>
      <HourBox time={"8pm"}/>
      <HourBox time={"9pm"}/>
      <HourBox time={"10pm"}/>
    </div>
  );
};

export default DayColumn;