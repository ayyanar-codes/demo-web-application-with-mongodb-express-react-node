import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeList from './components/EmployeeList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <NavBar bg='dark' variant='dark'>
          <Container>
            <NavBar.Brand>
              <Link to='/' className='nav-link'>MERN stack example</Link>
              <Link to={'/create-emp'} className='nav-link'>Create Employee</Link>
              <Link to={'/edit-emp'} className='nav-link'>Edit Employee</Link>
              <Link to={'/emp-list'} className='nav-link'>Employee List</Link>

            </NavBar.Brand>
          </Container>
        </NavBar>

        <Container>
          <Row>
            <Col md={12}>  
              <div className='wrapper'>
                <switch>
                  <Route
                    exact
                    path='/create-emp'
                    component={CreateEmployee}
                  ></Route>
                  <Route
                    exact
                    path='/edit-emp'
                    component={EditEmployee}
                  ></Route>
                  <Route
                    exact
                    path='/emp-list'
                    component={EmployeeList}
                  ></Route>
                </switch>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      </Router>
      
    </div>
  );
}

export default App;
