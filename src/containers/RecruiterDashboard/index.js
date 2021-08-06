import React, { Component } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

import { users } from '../../config';
import history from '../../history';
import { fetchPostedJobs, logOut } from '../../actions';
import Pagination from '../../components/Pagination';
import RenderPostedJobs from '../../components/Recruiters/RenderPostedJobs';
import Header from '../../components/Header';

const styles = {
  row: { marginTop: '40px' },
  jobsListContainer: {
    marginTop: '50px'
  },
  jobHeader: {
    borderRadius: '6px',
    margin: '10px',
    padding: '15px',
    fontFamily: 'sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1.2rem',
    textAlign: 'center',
    alignItem: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
};

let postedJobsLoaded = false;

class RecruiterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postedJobsPerPage: 5
    };
  }

  componentDidMount() {
    const recruiter = this.props.loggedInUser;
    if (recruiter) {
      if (recruiter.userRole !== users.recruiter.role) {
        history.push('/login');
      }
    }

    this.props.fetchPostedJobs(recruiter);
    postedJobsLoaded = true;
    console.log(this.props.postedJobs);
  }

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    if (!postedJobsLoaded) {
      return <Spinner animation='border' />;
    }

    if (!this.props.postedJobs.length) {
      console.log(this.props.postedJobs);
      return (
        <div>
          <Header></Header>
          <h1 style={{ marginTop: '80px' }}>You did not post any job yet!</h1>
        </div>
      );
    }

    const indexOfLastPostedJob =
      this.state.currentPage * this.state.postedJobsPerPage;
    const indexOfFirstPostedJob =
      indexOfLastPostedJob - this.state.postedJobsPerPage;
    const currentPostedJobs = this.props.postedJobs.slice(
      indexOfFirstPostedJob,
      indexOfLastPostedJob
    );
    console.log(this.props.postedJobs);

    return (
      <div>
        <Header></Header>
        <Container style={styles.jobsListContainer}>
          <Row>
            <Col>
              <h1>Posted Jobs</h1>
            </Col>
          </Row>

          <Row style={styles.jobHeader}>
            <Col md={2}>Title</Col>
            <Col md={6}>Description</Col>
            <Col md={2}>Location</Col>
          </Row>

          <RenderPostedJobs jobs={currentPostedJobs} />
        </Container>

        <Pagination
          currentPage={this.state.currentPage}
          itemsPerPage={this.state.postedJobsPerPage}
          totalItems={this.props.postedJobs.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser,
    postedJobs: state.postedJobs
  };
};

const actionCreators = {
  fetchPostedJobs,
  logOut
};

export default connect(
  mapStateToProps,
  actionCreators
)(RecruiterDashboard);
