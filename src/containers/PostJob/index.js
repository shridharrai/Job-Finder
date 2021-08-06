import React, { Component, useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { users } from '../../config';
import history from '../../history';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { postJob, logOut } from '../../actions';
import { validate } from './validate';
import { renderInput } from '../../utils';

const styles = {
  homeLink: {
    textDecoration: 'none'
  },
  headerRow: {
    marginTop: '30px',
    marginBottom: '30px'
  }
};

const PostJob = ({ loggedInUser, postJob, logOut, handleSubmit }) => {
  const [postButtonDisabled, TogglePostButton] = useState(false);

  useEffect(() => {
    const user = loggedInUser;
    if (user) {
      if (user.userRole !== users.recruiter.role) {
        history.push('/login');
      }
    }
  }, []);

  const onSubmit = formValues => {
    const recruiter = loggedInUser;
    TogglePostButton(true);

    postJob(formValues, recruiter)
      .then(response => {})
      .catch(err => {
        alert('Something went wrong, try some time later!');
      });
  };

  return (
    <Container>
      <title>Post a Job</title>

      <Row style={styles.headerRow}>
        <Col>
          <Link to='/' style={styles.homeLink}>
            <h1>Job Finder</h1>
          </Link>
        </Col>
        <Row>
          <Col>
            <Link onClick={() => logOut()} to='/'>
              Logout
            </Link>
          </Col>
        </Row>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)} className='ui form error'>
            <Field name='title' component={renderInput} label='Title' />

            <Field
              name='description'
              component={renderInput}
              label='Description'
            />

            <Field name='location' component={renderInput} label='Location' />

            <button className='ui button primary' disabled={postButtonDisabled}>
              Post Job
            </button>
          </form>
        </Col>{' '}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};

const formWrapped = reduxForm({
  form: 'postJob',
  validate
})(PostJob);

const actionCreators = { logOut, postJob };

export default connect(
  mapStateToProps,
  actionCreators
)(formWrapped);
