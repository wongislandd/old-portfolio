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
    dateText="2014 – 2018"
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
    <div><a href="https://www.commonpointqueens.org" target="_blank">Central Queens Y</a> (Summers 2014-2017)</div>
    <div><a href="https://citgch.org/" target="_blank">Church in the Gardens</a> (Summers 2017-2018)</div>
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
                 <li>- Competed as a player in the official <a href="https://nexus.leagueoflegends.com/en-us/esports/search/college/" target="_blank">Riot tournament</a>.</li>
                 <li>- Earned a $2,000 scholarship for <a href="https://news.stonybrook.edu/student-spotlight/sbus-league-of-legends-team-goes-virtually-undefeated/" target="_blank">placing 3rd in the Eastern conference</a>.</li>
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
               store matches in an <a href="https://www.npmjs.com/package/enmap" target="_blank">Enmap</a> and can display a formatted upcoming schedule as well as alert players when
               a match is coming up shortly. See more about it <a href="https://imgur.com/a/jIYuI2x" target="_blank">here</a>. </li>
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
    <span className = "category">Technologies Used</span>
    <ul className ="technologies">
          <li className="tag">Javascript</li>
          <li className="tag">Discord.js </li>
          <li className="tag">Enmap</li>
          <li className="tag">Amazon Web Services</li>
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
         <li>- The app was created in Android Studio and uses <a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> to keep track of purchases and allows users to view their spending by the day/week and provides
               insight on what they're spending on.
         </li>
         <li>- Simple Finance Log is on the Google Play Store! Find it <a href="https://play.google.com/store/apps/details?id=com.SimpleFinApp.myapplication" target="_blank">here</a>.</li>
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
    <span className = "category">Technologies Used</span>
    <ul className ="technologies">
        <li className="tag"> Java </li>
        <li className="tag"> SQLite</li>
        <li className="tag"> Android Studio</li>
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
         <li>- The app uses <a href="https://jsoup.org/" target="_blank">jsoup</a> to parse through and display clothing sales. The idea is 
              that if I knew I wanted a blue shirt, I can search through all the sites at once and there will be a uniform format
              of all the sites in one place. 
          </li>
          <li> - Still a Work In Progress, kind of brushed this one to the side for a bit. Will continue if I find time but check it
               out <a href="https://imgur.com/a/rn7f5kE" target="_blank">here</a> until then.
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
    <span className = "category">Technologies Used</span>
    <ul>
        <li className="tag">Java</li>
        <li className="tag">Jsoup</li>
        <li className="tag">Android Studio</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    className = "TimelineBox"
    key="010"
    dateText="12/2019"
    dateInnerStyle={{ background: Colors.RED }}
    style={{ color: Colors.RED }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Wireframe Maker</h3>
    <h5 className="description">Final Project for My Web Development Course</h5>
    <ul><span className = "category">Description</span>
         <li>- The wireframer is a react-redux-firebase application that allows users to create, edit, save, and delete wireframes. A wireframe is a layout 
           that is used in the development phase of many applications to get a rough idea of where certain text boxes / containers need to be. </li>
         <li>- I left the database available for read/writes indefinetly and set up a test account for anyone who wants to try it out. Check it out on my <a href="https://github.com/cwong51799/Wireframer-Project" target="_blank">Github!</a></li>
    </ul>
    <ul><span className = "category">Takeaways</span>
         <li>- The requirements for this project were mostly functionality based. A lot of the design was up to each individual student developer. I had a lot of 
           fun working on this one. I got to mess around with components, color schemes, and tried to get all the alignment and layout just right. From this
           project I realized that web development could be a passion of mine.
         </li>
    </ul>
    <span className = "category">Technologies Used</span>
    <ul>
        <li className="tag">Firebase</li>
        <li className="tag">React</li>
        <li className="tag">Javascript</li>
    </ul>
  </TimelineItem>
  <TimelineItem
    className = "TimelineBox"
    key="010"
    dateText="02/2020"
    dateInnerStyle={{ background: Colors.PURPLEISH }}
    style={{ color: Colors.PURPLEISH }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Food with Friends</h3>
    <h5 className="description">Winner of the Most Innovative Hack at the <a href="https://hackhealth-2020.devpost.com/submissions" target="_blank">HackHealth 2020 Hackathon</a></h5>
    <ul><span className = "category">Description</span>
         <li>- The category of the Hackathon was health so my team and I decided to tackle mental health on campus. Food with Friends is is an android application which utilizes 
           a simple user interface and a Firebase database in the backend. Stony Brook University students can check-in at the dining locations. Other students using the app can
           see this and an arrangement to meet and eat can be made.
          </li>
          <li> - The idea is to encourage social eating. Classes can be difficult and taxing on a student's mental health. Food can bring people together in a natural and accessible way.
            By providing the tools to have students eat together, we hope to destress students and boost their mental health.
          </li>
    </ul>
    <ul><span className = "category">Takeaways</span>
         <li>- I thought of the concept for Food with Friends in my freshman year at Stony Brook. At this time, I had no knowledge of what to do to make it happen
           and the furthest I got with it was a Wireframe of the app in an Intro to Design class. Fast forward nearly two years later and I've learned the tools to 
           realize my idea. Breathing my dream into reality was an extremely fufilling experience and it made my college career up until this point come full circle.
           This is the feeling I love the most when it comes to app development.
         </li>
         <li>
           - I worked with my friends on this. Some of them didn't know how to use Android Studio or Github. Additionally, I haven't had much experience using Github in
           a group setting until this point. In showing them how to do basic commits/pushs/branches, I solidified the knowledge I had on Git.
         </li>
         <li>- Firebase is an extremely useful and accessible backend service. I look forward to using it more on future projects.
         </li>
    </ul>
    <span className = "category">Technologies Used</span>
    <ul>
        <li className="tag">Firebase</li>
        <li className="tag">Java</li>
        <li className="tag">Android Studio</li>
    </ul>
  </TimelineItem>
  <TimelineItem
     className = "TimelineBox"
     key="011"
     dateText="05/2020"
     dateInnerStyle={{ background: Colors.BLUE }}
     style={{ color: Colors.BLUE }}
     bodyContainerStyle={{
       background: '#ddd',
       padding: '20px',
       borderRadius: '8px',
       boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
     }}
  >
    <h3> Interning at Lowes Corporate.</h3>
  </TimelineItem>
  </Timeline>   
              </div>
          )
      }
  }
