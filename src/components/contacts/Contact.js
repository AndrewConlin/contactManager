import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handelShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  handelDeleteClick = (id, dispatch) => {
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
        dispatch({
          type: 'DELETE_CONTACT',
          payload: id
        });
      });
    } catch (e) {
      // you wouldn't do this, just a work around for using the jsonPlaceholder API
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.handelShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.handelDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
