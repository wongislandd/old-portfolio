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
    BEIGE: "#aa9755",
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
    className = "TimelineBox"
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
    <p>Not much to say about school here so I'll use it as an opportunity to talk about my childhood.
       My love for computers started when I was young. My dad was a gamer and I grew into it as we played single player games together.
       He would claim his left hand wasn't too ampidextrous so I'd always control the keyboard.
    </p>
    <p>
       Towards the end of elementary school I was given an old laptop which I tried my hardest to
       make it run as well as possible. This gave me a lot of exposure to just general-usage with computers and in the following years
       I'd probably spend more time gaming than I should have.
    </p>
  </TimelineItem>
  <TimelineItem
     className = "TimelineBox"
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
    className = "TimelineBox"
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
    className = "TimelineBox"
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
         <li>- Used languages Java, Python, MIPS Assembly, Javascript/HTML/CSS, and O'Caml</li>
         <li>- Using technologies React/Redux/Firebase to create a todo-list web application.</li>
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
    className = "TimelineBox"
    key="007"
    dateText="05/2019"
    dateInnerStyle={{ background: Colors.PURPLEISH }}
    style={{ color: Colors.PURPLEISH }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Created Virtual McSlap</h3>
    <h5 className="description">A scheduling bot created using Discord.js.</h5>
    <ul><span className = "category">Description</span>
         <li>- Virtual McSlap was created for my collegiate e-sport's team discord. The bot is able to
               store matches in an <a href="https://www.npmjs.com/package/enmap">Enmap</a> and can display a formatted upcoming schedule as well as alert players when
               a match is coming up shortly. See more about it <a href="https://imgur.com/a/jIYuI2x">here</a>. </li>
         <li>- The bot is deployed on Amazon Web Services and is used by my own team and some friends.</li>
    </ul>
    <ul><span className = "category">Takeaways</span>
         <li>- I wanted to work with some form of persistent storage and originally looked into SQL options. I learned that
               for an application like Virtual McSlap, local storage is more efficient.
         </li>
         <li>- There's something really fun about completely owning a project like this. I encourage all my friends to try and
               find bugs in the bot. Whenever they find one, there's a satisfaction that comes with being the go-to. 
         </li>
         <li>- When visiting the code at a later date to fix bugs or add features, I learned the hard way that thorough documentation is extremly
               helpful. I feel as though someone should be able to read the code and its documentation and have a good idea as 
               to what's going on.
         </li>
    </ul>
    <ul><span className = "category">Technologies Used</span>
        <li>- Javascript, Discord.js, Enmap, Amazon Web Services</li>
    </ul>

  </TimelineItem>
  <TimelineItem
    className = "TimelineBox"
    key="008"
    dateText="06/2019"
    dateInnerStyle={{ background: Colors.GREEN }}
    style={{ color: Colors.GREEN }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
        <h3>Created Simple Finance Log</h3>
    <h5 className="description">An Android App that helps keep track of spending/debt.</h5>
    <ul><span className = "category">Description</span>
         <li>- Simple Finance Log stemmed from my need to manage my money better in college. Often times I'd check the money I 
               have allocated for food and question where it went. Also, some of my friends never bring their wallets and I'd
               spot them and try really hard to remember their debts. Simple Finance Log solves both these problems.
         </li>
         <li>- The app was created in Android Studio and uses <a href="https://www.sqlite.org/index.html">SQLite</a> to keep track of purchases and allows users to view their spending by the day/week and provides
               insight on what they're spending on.
         </li>
         <li>- Simple Finance Log is on the Google Play Store! Find it <a href="https://play.google.com/store/apps/details?id=com.SimpleFinApp.myapplication">here</a>.</li>
    </ul>
    <ul><span className = "category">Takeaways</span>
         <li>- I originally planned on using SQL and then realized the biggest benefit of that would be if I had account that
               you could log in through multiple devices and see the same data. This is beyond the scope of this project. Also SQL
               services are expensive.
         </li>
         <li>- I made this app knowing that there are many better like it. I made mine slightly unique by having the "Tabs" category but don't
               really expect anyone but myself to use it. Still, I created it as a learning experience. If I had more time I would try to make mine
               just as good and if not better than the ones made by companies.
         </li>
         <li>- During the devlopment process, I created a few features which allowed me to test the functionality of the app. For example, I created a 
               method which I bound to a button that generated 1,000 random purchases which helped a ton. I was able to speed up my development by adding
               these features.
         </li>
         <li>- Android Studio is really interesting, but it took many YouTube videos to figure it out.
         </li>
    </ul>
    <ul><span className = "category">Technologies Used</span>
        <li>- Java, SQLite, Android Studio</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    className = "TimelineBox"
    key="009"
    dateText="08/2019"
    dateInnerStyle={{ background: Colors.BEIGE }}
    style={{ color: Colors.BEIGE }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Started Sale Scraper (WIP)</h3>
    <h5 className="description">An Android App that reads the sale pages of several popular clothing brands</h5>
    <ul><span className = "category">Description</span>
         <li>- The app uses <a href="https://jsoup.org/">jsoup</a> to parse through and display clothing sales. The idea is 
              that if I knew I wanted a blue shirt, I can search through all the sites at once and there will be a uniform format
              of all the sites in one place. 
          </li>
          <li> - Still a Work In Progress, kind of brushed this one to the side for a bit. Will continue if I find time but check it
               out <a href="https://imgur.com/a/rn7f5kE">here</a> until then.
          </li>
    </ul>
    <ul><span className = "category">Takeaways</span>
         <li>- Web Scraping can be difficult since every website displays their listings differently. I can definetly see why 
               some applications don't "support" certain places. For example, Uniqlo's website loads more listings into the DOM 
               as the user scrolls down. I couldn't virtually scroll down and so currently the Uniqlo page only takes the first 20 listings.
               In contrast, H&amp;M can load 500 listings at once.
         </li>
         <li>- I really enjoy creating apps that I personally find useful. If I'm passionate about what I'm working on I feel 
               as though I can create something great.
         </li>
    </ul>
    <ul><span className = "category">Technologies Used</span>
        <li>- Java, jsoup, Android Studio,  </li>
    </ul>
  </TimelineItem>
  <TimelineItem
    className = "TimelineBox"
    key="010"
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
