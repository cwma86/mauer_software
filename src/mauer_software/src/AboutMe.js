import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import meWithMustache from './images/MeWithMustache.jpg'
const AboutMe = () => {
return (
	<div style={{margin:"20px"}}>
            <h1>About Me</h1>
			<Row>
				<Col/>
				<Col>
					<img 
						src={meWithMustache} 
						width="200"
						height="200"
						alt="Me" 
					/>
				</Col>
				<Col/>
			</Row>
            <p>My name is Cory Mauer. I have been a professional software developer since 2015.
                Most of my time has been spent developing applications with languages like C and
                C++.
            </p>
            <p>I created this blog to learn more about web developement and teach others in the
                process.
            </p>
	</div>
);
};

export default AboutMe;
