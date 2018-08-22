import React, { Component } from 'react';

// https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    // files on load of the component, good location to load data for the page
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentWillMount() {
  //   // runs prior to component being mounted DEPRICATED
  //   console.log('Will Mount');
  // }
  // componentDidUpdate() {
  //   // runs when the component re-renders
  //   console.log('Updated');
  // }
  // componentWillUpdate() {
  //   // runs when the prior to re-renders DEPRICATED
  //   console.log('Will Update');
  // }
  // compoentWillReceiveProps(nextProps, nextState) {
  //   // when component recieves new properties (Redux) DEPRICATED
  //   console.log('Compoent recieve props');
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('get snapshot');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
