import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import history from '../../history';

const styles = {
  job: {
    borderRadius: '6px',
    margin: '10px',
    padding: '15px',
    fontFamily: 'sans-serif',
    backgroundColor: '#F0F0ED',
    fontSize: '1.2rem',
    textAlign: 'center',
    alignItem: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
};

const RenderPostedJobs = ({ jobs }) => {
  console.log(jobs);
  return jobs.map((job, index) => {
    return (
      <div key={index}>
        <Link
          to={{
            pathname: '/job/candidates',
            state: {
              job
            }
          }}
          style={styles.link}
        >
          <Row style={styles.job}>
            <Col md={2}>{job.title}</Col>
            <Col md={6}>{job.description}</Col>
            <Col md={2}>{job.location}</Col>
          </Row>
        </Link>
      </div>
    );
  });
};

export default RenderPostedJobs;
