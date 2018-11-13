import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class FormPersonalInfo extends Component {

 
     render () {
     

        const { lastName, email} = this.props;
       

         return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success"/>
            <h1>Thank You {lastName} For Your Submition</h1>  
            <p>You will get an email {email} with further instructions</p> 
            </React.Fragment>
        </MuiThemeProvider>
         )
     }
}




export default FormPersonalInfo