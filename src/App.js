/*import logo from './logo.svg';*/
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllTest from './components/AllTest';
import AddCourse from './components/Addcourse';
import Header from'./components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";



function App() {
    const btnHandle= ()=>{
      toast("this is my first message");
      toast.success("done", {position: "top-center"});
      toast.error("error", {position: "top-center"});
    };

  return (
  <div>
    <Router>
    <ToastContainer />
      <Container>
        <Header />
      <Row>
        <Col md={4}>
          <Menus />
        
        </Col>
        <Col md={8}>
        <Routes>
        <Route  path="/" Component={Home} exact/>
        <Route  path="/add-course" Component={AddCourse} exact/>
        <Route  path="/view-course" Component={AllTest} exact/>
        </Routes>
        
        </Col>
      </Row>
      </Container>
      </Router>

  {/* <h1>Simple Application </h1>
  <h2>This is bootstrap component </h2>
    <Button color="info">info</Button>
    <Button color="warning" outline onClick={btnHandle}> warning</Button>
    <Button color="primary" size="lg">primarylg</Button>
    <Button color="success" size="sm"> Smallsuccess</Button>
    <Button color="primary" disabled >Disabled button</Button>
    <Button color="link"> link</Button>
    <Button color="danger">danger </Button>
     */}

    {/* <Home />
  
     < AllTest />
      <AddCourse />
      <hr></hr>
      <hr />
      <AddCourse /> */}

    {/* <Course 
      Course={{ tital:"Django Course", discription:"this is for beginer"}}
      />
    <Course 
      Course={{ tital:"Java Course", discription:"this is for beginer"}}
      />
    <Course 
      Course={{ tital:"React Course", discription:"this is for beginer"}}
      /> */}


  </div>
  );
}
    export default App;












   /* (<div className="App">
      <header className="App-header">
        <img srThe message indicates that the create-react-app process was aborted due to errors during installation, and the cleanup process has deleted the partially created files and directories. This means the youtube_courses directory and its contents were removed from your system.c={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/



