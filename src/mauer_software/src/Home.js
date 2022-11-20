import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        // fetch("https://f7ajat2e0d.execute-api.us-east-1.amazonaws.com/dev/message/items")
        fetch("https://phytow91nh.execute-api.us-east-1.amazonaws.com/dev/items")
        .then((res) => res.json())
        .then((data) => setMessage(data));
    }, []);

    return (
    <>
        <Col xs="2">tool bar</Col>
        <Col>{message}</Col>
    </>
);
};

export default Home;
