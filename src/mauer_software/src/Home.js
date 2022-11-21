import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const [message, setMessage] = useState("");

    // TODO new api
    // fetch("https://phytow91nh.execute-api.us-east-1.amazonaws.com/dev/items")
    // TODO old api 
    // fetch("https://f7ajat2e0d.execute-api.us-east-1.amazonaws.com/dev/message/items")

    useEffect(() => {
        fetch("https://p3hosnbd20.execute-api.us-east-1.amazonaws.com/dev/items/1")
        .then((res) => res.json())
        .then((data) => setMessage(data[0]));
    }, []);

    return (
    <>
        <Col xs="2">
            <Row><b>Blog Posts</b></Row>
            
            <Row>{message.Title}</Row>
        </Col>
        <Col>{message.contents}</Col>
    </>
);
};

export default Home;
