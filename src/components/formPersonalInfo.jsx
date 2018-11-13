import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalInfo extends Component {

    continue = (e) => {
        this.props.nextStep()
    }

    back = (e) => {
        this.props.prevStep()
    }
     render () {
         console.log(this.props.prevStep)
     
        const { values, handleChange} = this.props;
       

         return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Detals"/>
                <TextField
                     hintText="Enter your occupation"
                     floatingLabelText="occupation"
                     defaultValue={values.occupation}
                     onChange={handleChange('occupation')}

                     />
                     <br/>

                       <TextField
                     hintText="Enter your city"
                     floatingLabelText="city"
                     defaultValue={values.city}
                     onChange={handleChange('city')}

                     />
                     <br/>

                       <TextField
                     hintText="Enter your bio"
                     floatingLabelText="bio"
                     defaultValue={values.bio}
                     onChange={handleChange('bio')}

                     />
                  <br/>
                  <RaisedButton
                  label="Continue" 
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                  />

                   <RaisedButton
                  label="Back" 
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
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

export default FormPersonalInfo