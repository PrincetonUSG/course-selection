import React, { Component } from 'react';
import SearchCourseCard from './SearchCourseCard';

const RADIX = 10;
const BASE_COURSE_OFFERINGS_URL = 'https://www.princetoncourses.com/course/';

export default class SearchCard extends Component {
  /* Helper function to convert a semester into readable form */
  convertSemToReadableForm = (sem) => {
    if (sem[0] === 'f') {
      return 'Fall 20' + sem.slice(1);
    } else {
      return 'Spring 20' + sem.slice(1);
    }
  };

  /* Converts semester list to human readable form, using the two most recent semesters */
  getPrevOfferedSemList = (semList) => {
    // Sort semester list according to when they happened
    semList.sort(function (sem1, sem2) {
      let yearCmp =
        parseInt(sem1.slice(1), RADIX) - parseInt(sem2.slice(1), RADIX);
      if (yearCmp !== 0) return yearCmp;
      else if (sem1[0] === 's' && sem2[0] === 'f') return -1;
      else if (sem1[0] === 'f' && sem2[0] === 's') return 1;
      else return 0;
    });

    // Convert to readable form
    let result = '';
    for (
      let index = Math.max(0, semList.length - 2);
      index < semList.length;
      index++
    ) {
      result += this.convertSemToReadableForm(semList[index]);
      if (index !== semList.length - 1) result += ', ';
    }
    return result;
  };

  /* Converts semester to term code */
  convertSemToTermCode = (sem) => {
    let code = '1';
    if (sem[0] === 'f') {
      code += (parseInt(sem.slice(1), 10) + 1).toString() + '2';
    } else {
      code += sem.slice(1) + '4';
    }
    return code;
  };

  render() {
    let course = this.props.course;
    let courseId = course['id'];
    let courseSemList = course['semester_list'];
    let termCode = this.convertSemToTermCode(
      courseSemList[courseSemList.length - 1]
    );

    let courseInfoLink = `${BASE_COURSE_OFFERINGS_URL}${termCode}${courseId}`;
    let prevOfferedSemList = this.getPrevOfferedSemList(courseSemList);

    return (
      <div className={`search-card ${course['semester']}`}>
        <>
          <SearchCourseCard
            course={course}
            courseKey={this.props.courseKey}
            courseIndex={this.props.index}
          />
          <div className="search-card-info">
            <div>
              <div className="course-title">{course['title']}</div>
              <div className="course-prev-sems">{`Previously offered in ${prevOfferedSemList}`}</div>
            </div>
            <div className="search-card-links">
              <a
                href={courseInfoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-info-circle fa-lg fa-fw course-info" />
              </a>
            </div>
          </div>
        </>
      </div>
    );
  }
}
