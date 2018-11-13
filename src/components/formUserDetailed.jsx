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
         const { values} = this.props;
         return (
             <MuiThemeProvider>
                 <React.Fragment>
                     <AppBar title="Enter User Detals"/>
                 </React.Fragment>
             </MuiThemeProvider>
         )
    }

}


export default FormUserDetailed