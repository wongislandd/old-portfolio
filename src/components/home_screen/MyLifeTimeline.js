import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
const Colors = {
    BLACK : "#000000",
    RED: '#e86971',
    BLUE : '#61b8ff',
    GREEN : "#54B948",
    WHITE: "#FFFFFF",
    LIME: "#dddc22",
    PURPLEISH: "#db24ad",
    LIGHTBLUE: "#18bfe7",
    TAN : "#eba963",
}

export default class MyLifeTimeline extends Component {
    render() {
        return (
            <div>
                <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="05/17/1999"
    style={{ color: Colors.RED }}
  >
    <h3>Started my journey as a human.</h3>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="2004 – 2011"
    dateInnerStyle={{ background: Colors.BLUE, color: Colors.WHITE }}
    style= {{ color: Colors.BLUE}}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: Colors.BLACK }}>William Sidney Mount</h3>
    <h5 className="description">Elementary School</h5>
    <p>Not much to say here.</p>
  </TimelineItem>
  <TimelineItem
     key="003"
     dateText="2011 – 2017"
     dateInnerStyle={{ background: Colors.GREEN, color: Colors.WHITE }}
     style= {{ color: Colors.GREEN}}
     bodyContainerStyle={{
       background: '#ddd',
       padding: '20px',
       borderRadius: '8px',
       boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
     }}
   >
     <h3 style={{ color: Colors.BLACK }}>Metropolitan Expeditionary Learning School</h3>
     <h5 className="description">Middle School/High School</h5>
         <ul><span className = "category">Extracurriculars</span>
         <li>- Joined Student Goverment in Sophomore year and was re-elected until I graduated.
             <ul>
                <li>- Opened the "school store," a room outside the cafeteria where we would sell snacks, and sodas and tickets to our events.</li>
                <li>- Organized and executed fundraiser events. Contacted local restaurants and businesses to get them to sponsor.</li>
                <li>- Raised over $11,000 for the class fund which was used to subsidize Senior dues by about 40%.</li>
             </ul>
         </li>
         </ul>
      <ul><span  className = "category">Accomplishments</span>
        <li>- High Honors all throughout high school and received the Math Philosopher's award in Junior year. </li>
        <li>- Ended 3rd in my graduating class.</li>
        <li>- Got detention once for forgetting to wear uniform shoes after Halloween.</li>
      </ul>
  </TimelineItem>
  <TimelineItem
    key="005"
    dateText="07/2017 – Present"
    dateInnerStyle={{ background: Colors.LIGHTBLUE }}
    style= {{ color: Colors.LIGHTBLUE}}
    bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
  >
    <h3>Summer Camp Counseling</h3>
    <div><a href="https://www.commonpointqueens.org">Central Queens Y</a> (Summers 2014-2017)</div>
    <div><a href="https://citgch.org/">Church in the Gardens</a> (Summers 2017-2018)</div>
    <ul>
        <li>- Led large groups of children ranging between the ages of 5-7</li>
        <li>- Learned how to optimally designate work between co-counselors and myself based on strengths.</li>
        <li>- Struck a good balance between staying fun while maintaining authority with the kids.</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    key="006"
    dateText="07/2017 – Present"
    dateInnerStyle={{ background: Colors.RED }}
    style= {{ color: Colors.RED}}
    bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
  >
    <h3>Stony Brook University</h3>
    <h5 className="description">B.S. Computer Science, Junior</h5>
     <ul><span className = "category">Coursework</span>
         <li>- Studying topics including algorithms, data structures, sorting, recursion, dynamic programming,
         object-oriented programming, functional programming. </li>
         <li>- Learned important design practices used to create efficient 
             maintainable, scalable, and interactive software.
         </li>
         <li>- Used Java, Python, MIPS Assembly, Javascript/HTML/CSS, and O'Caml</li>
     </ul>
     <ul><span className = "category">League of Legends E-Sports Team</span>
             <ul>
                 <li>- Competed as a player in the official <a href="https://nexus.leagueoflegends.com/en-us/esports/search/college/">Riot tournament</a>.</li>
                 <li>- Earned a $2,000 scholarship for <a href="https://news.stonybrook.edu/student-spotlight/sbus-league-of-legends-team-goes-virtually-undefeated/">placing 3rd in the Eastern conference</a>.</li>
                 <li>- Learned a lot about effective communication and personal growth.</li>
             </ul>
     </ul>
  </TimelineItem>
  <TimelineItem
    key="007"
    dateText="05/2019"
    dateInnerStyle={{ background: Colors.PURPLEISH }}
    style={{ color: Colors.PURPLEISH }}
  >
    <h3>Created Virtual McSlap</h3>
  </TimelineItem>
  <TimelineItem
    key="008"
    dateText="06/2019"
    dateInnerStyle={{ background: Colors.GREEN }}
    style={{ color: Colors.GREEN }}
  >
    <h3>Created Simple Finance Log</h3>
  </TimelineItem>
  <TimelineItem
    key="009"
    dateText="Present"
    dateInnerStyle={{ background: Colors.TAN }}
    style={{ color: Colors.TAN }}
  >
    <h3>Looking for a Summer internship or research opportunity.</h3>
  </TimelineItem>
</Timeline>   
            </div>
        )
    }
}
