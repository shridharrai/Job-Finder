import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { logOut } from '../actions';

// const styles = {
//   row: { marginTop: '40px' },
//   jobsListContainer: {
//     marginTop: '50px'
//   },
//   jobHeader: {
//     borderRadius: '6px',
//     margin: '10px',
//     padding: '15px',
//     fontFamily: 'sans-serif',
//     backgroundColor: '#000',
//     color: '#fff',
//     fontSize: '1.2rem',
//     textAlign: 'center',
//     alignItem: 'center'
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'black'
//   }
// };

const Header = ({ title, logOut }) => {
  return (
    <Container>
      <title>{title}</title>

      <Row>
        <Col>
          <Link to='/'>
            <h1>Job Finder</h1>
          </Link>
        </Col>
        <Row>
          <Col>
            <Link to='/post/job'>PostJob</Link>
          </Col>
          <Col>
            <Link onClick={() => logOut()} to='/'>
              Logout
            </Link>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

const actionCreators = {
  logOut
};

export default connect(
  null,
  actionCreators
)(Header);
