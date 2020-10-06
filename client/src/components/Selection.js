import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Selection.css';
import './PlansList.css';
import gym from '../assets/images/gym.jpg';
import crossfit from '../assets/images/crossfit.jpg';
import yoga from '../assets/images/yoga.jpg';

export default class Selection extends Component {

handleSubmit = event => {
  event.preventDefault();
  axios.get('/api/templates')
  .then((templates) => {
    console.log(templates)

    // this.props.handleChange({
    //   type: '',
    //   numberOfDays: 0
    // })
    // this.props.getData()
  })
  .catch(err => {
    console.log(err)
  })
}
// handleChange = event => {
//   const {name, value} = event.target;
//   this.props.setState({
//     [name]: value
//   })
// }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className='form'>
      <h4>1. Select the type of training:</h4>
      <div className='flex-container'>
      <div className='flex-card'>
        <Form.Group>
          <Form.Label htmlFor='gym'><img src={gym} alt='gym'></img>Gym
          <Form.Control
            type='radio'
            id='type'
            name='type'
            value={'gym'}
            onChange={this.props.handleChange}
            /> 
          </Form.Label>
        </Form.Group>
        </div>  
        <div className='flex-card'>
        <Form.Group>
          <Form.Label htmlFor='crossfit'><img src={crossfit} alt='crossfit'></img>Crossfit
          <Form.Control
            type='radio'
            id='type'
            name='type'
            value={'crossfit'}
            onChange={this.props.handleChange}
            /> 
          </Form.Label>
        </Form.Group>
        </div>  
        <div className='flex-card'>
        <Form.Group >
          <Form.Label htmlFor='yoga'><img src={yoga} alt='yoga'></img> Yoga
          <Form.Control
            type='radio'
            id='type'
            name='type'
            value={'yoga'}
            onChange={this.props.handleChange}
            /> 
          </Form.Label>
        </Form.Group>
        </div>
        </div>
        <h4>2. Select a number of days per week:</h4>
        <div className='flex-container-days'>
        <div className='flex-card-days'>
        <Form.Group>
          <Form.Label htmlFor='numberOfDays'>3 days</Form.Label>
          <Form.Control
            type='radio'
            id='numberOfDAys'
            name='numberOfDays'
            value={3}
            onChange={this.props.handleChange}
            /> 
        </Form.Group> 
        </div> 
        <div className='flex-card-days'>    
        <Form.Group>
          <Form.Label htmlFor='numberOfDays'>5 days</Form.Label>
          <Form.Control
            type='radio'
            id='numberOfDAys'
            name='numberOfDays'
            value={5}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>  
        </div>  
        <div className='flex-card-days'>      
        <Form.Group>
          <Form.Label htmlFor='numberOfDays'>5+ days</Form.Label>
          <Form.Control
            type='radio'
            id='numberOfDAys'
            name='numberOfDays'
            value={6}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>
        </div>
        </div>
        <Button className='button' onClick={this.props.nextStep}>Select</Button>
      </Form>
    )
  }
}
