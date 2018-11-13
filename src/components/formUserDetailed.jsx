import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


class FormUserDetailed extends Component {

    continue = (e) => {
        this.props.nextStep()
    }


    render () {
         const { values, handleChange} = this.props;
         return (
             <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar title="Enter User Detals"/>
                     <TextField
                     hintText="Enter your first name"
                     floatingLabelText="first Name"
                     defaultValue={values.firstName}
                     onChange={handleChange('firstName')}
                     />
                     <br/>
                      <TextField
                     hintText="Enter your last name"
                     floatingLabelText="last Name"
                     defaultValue={values.lastName}
                     onChange={handleChange('lastName')}

                     />
                       <br/>
                      <TextField
                     hintText="Enter your email"
                     floatingLabelText="Email"
                     defaultValue={values.email}
                     onChange={handleChange('email')}

                     />
                       <br/>
                       <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                       />
                      
                 </React.Fragment>
             </MuiThemeProvider>
         )
    }

}

const  styles = {
     button:{
         margin:15
     }
}


export default FormUserDetailed