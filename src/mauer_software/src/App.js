import './App.css';
import PageNav from './PageNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import AboutMe from './AboutMe';
import Home from './Home';
import Plotter from './Plotter';
import Footer from './Footer';

function App() {
  return (
    <>
    <div className="App">
      <PageNav/>
    </div>
    <Container style={{margin:"0"}}>
      {/* Page contents */}
      <Row>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/plotter' element={<Plotter/>} />
        </Routes>
      </Router>
      </Row>
      {/* Footer */}
      <Footer/>
    </Container>
    </>
  );
}

export default App;
