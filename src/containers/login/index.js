import React, { useEffect, useState } from 'react';
import { users } from '../../config';
import { Container, Col, Row } from 'react-bootstrap';
import history from '../../history';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import { renderInput } from '../../utils';
import { validate } from './validate';

const styles = {
  adminLoginLink: { fontSize: '1.1rem' },
  loginButton: { marginBottom: '20px' },
  homeLink: {
    textDecoration: 'none'
  },
  headerRow: {
    marginTop: '30px',
    marginBottom: '30px'
  }
};

const Login = ({ loggedInUser, logIn, handleSubmit }) => {
  const [loginButtonDisabled, ToggleLoginButton] = useState(false);

  useEffect(() => {
    const user = loggedInUser;
    if (user) {
      if (user.userRole === users.recruiter.role) {
        history.push('/recruiter/dashboard');
      }
    }
  }, []);

  const onSubmit = formValues => {
    ToggleLoginButton(true);
    logIn(formValues)
      .then(response => {})
      .catch(err => {
        alert('Error');
        ToggleLoginButton(false);
      });
  };

  return (
    <Container>
      <title>Login</title>

      <Row style={styles.headerRow}>
        <Col>
          <Link to='/' style={styles.homeLink}>
            <h1>Job Finder</h1>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)} className='ui form error'>
            <Field
              name='email'
              component={renderInput}
              label='Email'
              type='email'
            />

            <Field
              name='password'
              component={renderInput}
              label='Password'
              type='password'
            />

            <button
              className='ui button primary'
              style={styles.loginButton}
              disabled={loginButtonDisabled}
            >
              Login
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
  form: 'login',
  validate
})(Login);

const actionCreators = { logIn };

export default connect(
  mapStateToProps,
  actionCreators
)(formWrapped);
