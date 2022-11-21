import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("https://dncd6is23m.execute-api.us-east-1.amazonaws.com/dev/blogPosts/1")
        .then((res) => res.json())
        .then((data) => setMessage(data));
    }, []);

    return (
    <>
        <Col xs="2">
            <Row><b>Blog Posts</b></Row>
            
            <Row>{message.blogTitle}</Row>
        </Col>
        <Col>{message.blogContents}</Col>
    </>
);
};

export default Home;
