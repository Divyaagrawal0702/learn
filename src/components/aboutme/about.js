import React from 'react'
import './about.css'
import {a} from 'react-scroll';
import college from '../../assets/college.jpg'
import school2 from '../../assets/school2.jpg'
import school1 from '../../assets/school1.jpg'
const About = () => {
  return (
    
        <section id="about">
            <span className="title">What I have Done</span>
            <div className="info">
             <div className="college">
                <img src={college} alt="" className="collegeimg"/>
                <div className="collegedata">
                 <a className="collegedata" href="https://www.google.com/search?q=
                 // chameli+devi+group+of+institutions&rlz=1C1VDKB_enIN1093IN1093&oq=chame&gs
                 // _lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAY
                 // jwIyBwgEEAAYjwL// SAQkzODM2ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8" target="_blank">
                    Chameli Devi Group of Insititutions</a>
                    <h5>B.Tech in Computer Science And Engineering ,2020-2024</h5>
                    <h4>Indore,India</h4>
                       <p>CDGI took its first step in July 2006 with a vision to design the future scientifically with an enduring spirit. Within a short span, the Institute has attained a strong foothold among the top colleges of Madhya Pradesh. It is affiliated to RGPV, Bhopal, approved by AICTE, New Delhi and DAVV, Indore.
                         The Institute is accredited with 'A+' Grade by NAAC.</p>
                </div>
             </div><br/><br/>

             <div className="college">
                <img src ={school2} alt="" className="collegeimg"/>
                <div className="collegedata">
                <a className="collegedata" href="https://www.google.com/search?q=
                // dongle+public+school+dhamnod&sca_esv=3caead4b194ccc5f&rlz=1C1VDKB_
                // e nIN1093IN1093&udm=2&sxsrf=AHTn8zqYRt6430Xsl8GQ36RV_UyFicNYog%3A1737
                // 616081951&ei=0eqRZ47eOcza1e8Pg7-K2Q4&oq=dongle+public+&gs_lp=EgNpbWciDmR
                // vbmdsZSBwdWJsaWMgKgIIATIEEAAYHjIEEAAYHjIEEAAYHjIGEAAYBRgeMgYQABgIGB5I1T5Qs
                // wdY6C5wA3gAkAEAmAGjAqAB2xqqAQQyLTE0uAEDyAEA-AEBmAIRoALUHMICBRAAGIAEwgIKEAA
                // YgAQYQxiKBcICBBAjGCfCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQP
                // CAg0QABiABBixAxhDGIoFwgIHEAAYgAQYCpgDAIgGAZIHCDMuMC4xMy4xoAetRA&sclient=
                // img#vhid=7luD4MqDHi-4FM&vssid=mosaic" target="_blank">
                   Dongle Public School</a>
                    <h5>Intermediate,2019-2020</h5>
                    <p>DONGLE PUBLIC SCHOOL DHAMNOD was established in 2013 and it is managed by the Pvt. Unaided. It is located in Urban area. It is located in DHARAMPURI block of DHAR district of Madhya Pradesh. The school consists of Grades from 1 to 8. The school is Co-educational and it doesn't have an attached pre-primary section. The school is Not Applicable in nature and is not using school building as a shift-school. English is the medium of instructions in this school. This school is approachable by all weather road.
                         In this school academic session starts in April.</p>
                    <h4>Khalghat, India</h4>   
                </div>
             </div><br/><br/>

             <div className="college">
                <img src={school1} alt="" className="collegeimg"/>
                <div className="collegedata">
                <a className="collegedata" href="https://www.lgacademy.org/" target="_blank">
                    L.G. Academy School</a>
                    <h5>Marticulation,2017-2018</h5>
                    <h4>Indore, India</h4>
                    <p>L.G. Academy in Rau, Indore is a leading name in the education sector, offering a wide range of programs to cater to the diverse needs of its students.
                         The school is dedicated to academic excellence and operates on a schedule that accommodates students' varied commitments.</p>
                </div>
             </div>
            </div>
        </section>
  )
}

export default About;
