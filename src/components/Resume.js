import React, { Component } from 'react'
import '../styles/resume.scss'

const Resume = () => (
	<div id="resume-container">
		<div className="col col-left">
			<div className="section" id="header">
				<h1>KATHERINE MELLO</h1>
				<h2>SOFTWARE ENGINEER</h2>
				<div id="icons">
			    <div><img src="http://i.imgur.com/dv6X5TZ.png"/><span>katherine.mello8@gmail.com</span></div>
			    <div><img src="http://i.imgur.com/3wsQK19.png"/><span>(757) 642-4802</span></div>
			    <div><img src="http://i.imgur.com/isCzM1R.png"/><a href="https://www.linkedin.com/in/katherinemello"><span>LinkedIn</span></a></div>
			    <div><img src="http://i.imgur.com/aZDIyCE.png"/><a href="https://github.com/mell0kat"><span>Github</span></a></div>
			    <div><img src="http://i.imgur.com/9AKXJBn.png"/><a href="https://www.tumblr.com/blog/mellowcatcollections"><span>Blog</span></a></div>
			    <span>*</span>
				</div>
			</div>
			<div className="section">
				<h3>Summary</h3>
				<hr/>
				<p>I am a full stack developer looking to create via code.<br/>
				*<br/>
				As a senior at Cornell, I took an intro programming course and was immediately taken by the challenge of combining logic and creativity to solve problems. A lover of languages—I took German and Latin in high school and then majored in French literature in college, naturally I wanted to expand my exploration to the world of computer languages.
				<br/>
				*
				<br/>
				Drawing connections between disciplines to create interesting solutions has always been the most rewarding part of the learning process for me, and I look forward to applying my wide breadth of knowledge to the current problems of today.
				</p>
			</div>
			<div className="section">
				<h3>Skills</h3>
				<hr/>
				<p><b>Proficient</b></p>
					<span>JavaScript ~AngularJS ~ Node.js</span><br/>
					<span>Express ~ MongoDB ~ SQL</span><br/>
					<span>CSS ~ HTML</span><br/>
					<span>Git ~ Agile Development</span><br/>
					<span>React.js ~ Redux</span><br/>
				<span>Google Fu</span><br/>
				<p><b>Knowledgeable</b></p>
					<span>Firebase ~ Google App Engine</span>
					<span>Heroku ~ Bootstrap</span><br/>
					<span>Jasmine ~ Mocha ~ Chai</span><br/>
					<span>UI/UX ~ Sketch App</span><br/>
					<span>Material UI</span><br/>
				<p><b>Familiar</b></p>
					<span>Python ~ R</span><br/>
					<span>Socket.io ~ Bourbon.io</span><br/>
					<span>D3</span><br/>
				<br/>
				<h3>Interests</h3>
				<hr/>
				<span>Live Music ~ Guitar</span><br/>
				<span>Crossfit ~ Fitness</span><br/>
				<span>Spotaneous Dancing</span><br/>
				<span>Baking ~ Writing</span><br/>
				<span>Outdoors</span><br/>
			</div>
			<div className="section">
				<h3>Awards</h3>
				<hr/>
				<p><b>Fullstack Campus Solutions Award</b></p>
				<span>Tessel Hackathon</span><br/>
				<span>Nov. 2015</span><br/>
				<span>A combination of NodeJS and Tessel Hardware yielded an app that programmatically fills a water bottle to desired volume</span>
				<p><b>Most Aspirational Award</b></p>
				<span>Fullstack Academy LearnDot Hackathon</span><br/>
				<span>Apr. 2016</span><br/>
				<span>An educational "scavenger hunt" intended to be used as an onboarding tool. Encourages productive exploration of a new code base.</span>
				<p id="footnote">* Icons designed by Freepik from <a href="https://www.flaticon.com">www.flaticon.com</a></p>
			</div>
		</div>
		<div className="col col-right"
		>
			<div className="section">
				<h3>Education</h3>
				<hr/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Fullstack Academy of Code</b></span><br/>
					</div>
					<div className="inner-container-right">
						<span>New York, NY</span><br/>
						<span>Nov. 2015 - Feb. 2016</span><br/>
					</div>
				</div>
				<span>An immersive, full-time software engineering school that focuses on full stack JavaScript web development. Curriculum also includes computer science topics such as data structures and algorithms, as well as more general concepts like functional programming and asynchronous programming.
				</span>
				<br/>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Cornell University</b></span><br/>
						<span>B.A. French Literature 2015 · 4.03 GPA</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Ithaca, NY</span><br/>
						<span>2011 - 2015</span><br/>
					</div>
				</div>
				<span>
				Cornell Tradition Fellow  ·  Corson Prize for French Writing  ·  Phi Beta Kappa honors fraternity
				</span>
			</div>
			<div className="section">
				<h3>Employment</h3>
				<hr/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>re# studio</b></span><br/>
						<span>Full Stack Web Developer</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Brooklyn, NY</span><br/>
						<span>July 2016 - current</span><br/>
					</div>
				</div>
				<ul>
				    <li>developed (July 2016) a <a href="https://www.homelister.com/">MEAN stack app</a> for selling properties online --  focus on testing and debugging</li>
				    <li>currently leading a team of 3 engineers in building a customer-service focused <a href="http://larson-self-diagnosis.appspot.com/">chatbot</a> that uses ML to deliver seamless user experience</li>
				</ul>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Fullstack Academy</b></span><br/>
						<span>Assistant Instructor: "Flex" Immersive Program</span><br/>
					</div>
					<div className="inner-container-right">
						<span>New York, NY</span><br/>
						<span>Sep 2016 - current</span><br/>
					</div>
				</div>
				<ul>
				    <li>present ~1 in 4 lectures</li>
				    <li>provide guidance during workshops and office hours, both onsite and remotely</li>
				    <li>capitalize on familiarity with Fullstack Academy curriculum to onboard Senior Instructor</li>
				</ul>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Fullstack Academy</b></span><br/>
						<span>Software Engineer, Teaching Fellow & Admissions Associate</span><br/>
					</div>
					<div className="inner-container-right">
						<span>New York, NY</span><br/>
						<span>Feb 2016 - July 2016</span><br/>
					</div>
				</div>
				<ul>
				    <li>contributed to Fullstack Academy's learning software, participated in design reviews, followed Scrumban Agile</li>
				    <li>answered help tickets for students, conducted code reviews and weekly learning-team lunches, and acted as project manager for senior projects</li>
				    <li>conducted ~3 interviews/week for prospective students</li>
				    <li>check out <a href="http://www.fullstackacademy.com/tech-talks/css-animations">this tech talk</a> on CSS Animations and <a href="https://www.youtube.com/watch?v=8-5yxQw93Q8">this one</a> on Bloom Filters</li>
				</ul>
			</div>
			<div className="section">
			<h3>Projects</h3>
				<hr/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Self-Diagnosis KIT</b></span><br/>
						<span>A customer service bot for efficient self-diagnose of issues</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Aug. 2016 - current</span><br/>
						<span>re# studio</span><br/>
					</div>
				</div>
				<ul>
				    <li>built using React, Redux, and Material UI on the front-end</li>
				    <li>Firebase for live-updates and for backend storage solution</li>
				    <li>Google Cloud Platform for deployment and Dev Ops</li>
				    <li>a cross-vertical product</li>
				    <li>harness AI (api.ai) and ML to become more powerful and responsive</li>
				    <li>check out the <a href="http://larson-self-diagnosis.appspot.com/">live version</a></li>
				</ul>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Learndot</b></span><br/>
						<span>Fullstack Academy's in-house Educational Software</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Feb 2016 - July 2016</span><br/>
					</div>
				</div>
				<ul>
				    <li>leveraged role as former student to fix bugs and design features with the user at the forefront of engineering decisions</li>
				    <li>implemented end-to-end testing using Protractor</li>
				    <li>collaborated with fellow Teaching Fellows to prioritize and delegate backend testing</li>
				</ul>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Tamarafi</b></span><br/>
						<span>MEAN stack app that encourages exercise via a fitness friend</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Jan. 2016 - July 2016</span><br/>
					</div>
				</div>
				<ul>
				    <li>an interactive app the connects with Fitbit, Jawbone, and Misfit to track your health data (# steps, sleep quality, heart-rate), which affect your creature's health and mood</li>
				    <li>features a retro 8-bit design that evokes nostalgia for the 90s</li>
				    <li>crafted "customizable crib" feature using jQuery Draggable</li>
				    <li>implemented authentication</li>
				    <li>designed and created app's social features</li>
				    <li>check out this <a href="http://www.fullstackacademy.com/final-projects/tamarafi">demo video</a></li>
				</ul>
			</div>
			<div>
			<h3>Volunteer</h3>
				<hr/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Hole in the Wall Gang Camp</b></span><br/>
						<span>Summer Volunteer</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Ashford, CT</span><br/>
						<span>July 2015 · Aug. 2016</span><br/>
					</div>
				</div>
		    <span>"creating fun & friendship for seriously ill children and their families"</span>
				<br/>
				<br/>
				<div className="flex-container">
					<div className="inner-container-left">
						<span><b>Sofar Sounds</b></span><br/>
						<span>Ambassador & Avid Fan</span><br/>
					</div>
					<div className="inner-container-right">
						<span>Feb 2016 - July 2016</span><br/>
					</div>
				</div>
				<ul>
				    <li>promote Sofar Sounds and local artists</li>
				    <li>greet guests with cheer and a smile</li>
				    <li>craft mad witty tweets like <a href="https://twitter.com/SofarNYC/status/786734080125702145">this</a>, <a href="https://twitter.com/SofarNYC/status/786743626651099137">this</a>, and <a href="https://twitter.com/SofarNYC/status/786757783974707200">this</a> (this particular show was at DNA footwear, thus the foot-themed tweets)</li>
				    <li>tell all my friends about it all the time!</li>
				    <li>probably going to a Sofar show tonight</li>
				</ul>
				<br/>
			</div>
		</div>
	</div>
)

export default Resume


