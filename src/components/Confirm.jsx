import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {ListItem, List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalInfo extends Component {

    continue = (e) => {
        this.props.nextStep()
    }

    back = (e) => {
        this.props.prevStep()
    }
     render () {
     

        const {firstName, lastName, city, bio, occupation, email} = this.props;
       

         return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm Your Detals"/>
               <List>
                   <ListItem
                   primaryText='first Name'
                   secondaryText={firstName}
                   />

                   <ListItem
                   primaryText='last Name'
                   secondaryText={lastName}
                   />
                   <ListItem
                   primaryText='Email'
                   secondaryText={email}
                   />
                   <ListItem
                   primaryText='Occupation'
                   secondaryText={occupation}
                   />
                   <ListItem
                   primaryText='City'
                   secondaryText={city}
                   />

                    <ListItem
                   primaryText='Bio'
                   secondaryText={bio}
                   />
               </List>
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