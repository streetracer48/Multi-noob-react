import React, { Component } from 'react'
import FormUserDetails from './formUserDetailed'
import FormPersonalDetails from './formPersonalInfo'
import Confirm from './Confirm'

export class userForm extends Component {

    //default State

    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio: ''


    }

        //Go to  next step

    nextStep = () => {
         const {step} = this.state;
         this.setState( {
             step:step +1
         });
         
    }
    //Go back prev step


    prevStep = () => {
        const {step} = this.state;
        this.setState( {
            step:step -1
        });
        
   }

   //handle Filed Change

   handleChange = input => e => {
        this.setState({
            [input]:e.target.value
        });
   }




  render() {
       const {step} = this.state;
       const {firstName, lastName, email, occupation, city, bio} = this.state;
       const values ={firstName, lastName, email, occupation, city, bio};

       switch(step) {
           case 1:
           return (
               <FormUserDetails
               nextStep = {this.nextStep}
               handleChange={this.handleChange}
               values={values}
               />
           )
           case 2: 
           return (
            <FormPersonalDetails
            
            nextStep = {this.nextStep}
            prevStep ={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
           case 3: 
           return (
            <Confirm
            
            nextStep = {this.nextStep}
            prevStep ={this.prevStep}
            {...values}
            />
        )
           case 4: 
           return <h1>Succes</h1>
       }

  }
}

export default userForm
