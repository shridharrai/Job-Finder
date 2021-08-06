import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import person1 from '../../assets/person-1.jpg';
import person2 from '../../assets/person-2.jpg';
import person3 from '../../assets/person-3.jpg';

import './styles.css';

import { connect } from 'react-redux';
import history from '../../history';
import { users } from '../../config';

const styles = {
  navbar: {
    color: 'white'
  }
};

const LandingPage = ({ loggedInUser }) => {
  useEffect(() => {
    const user = loggedInUser;
    console.log(user);
    if (user) {
      if (user.userRole === users.recruiter.role) {
        history.push('/recruiter/dashboard');
      }
    }
  }, []);

  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Link style={styles.navbar} to='/'>
            Job Finder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Link style={styles.navbar} to='/signup'>
              Sign Up &nbsp;
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link style={styles.navbar} to='/login'>
              Log In
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Jumbotron>
          <h1>Welcome to Job Finder</h1>
          <p>We help people like you to find their Dream Job:)</p>
          <button className='btn-primary'>Learn More</button>
        </Jumbotron>
        <Row className='show-grid text-center'>
          <Col xs={12} sm={6} lg={4} className='person-wrapper'>
            <Image src={person1} roundedCircle className='profile-pic' />
            <h3>Frank</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={4} className='person-wrapper'>
            <Image src={person2} roundedCircle className='profile-pic' />
            <h3>Vanessa</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={4} className='person-wrapper'>
            <Image src={person3} roundedCircle className='profile-pic' />
            <h3>Riff</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};

export default connect(mapStateToProps)(LandingPage);
