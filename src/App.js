import React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import Mychart from "./components/Mychart";
import Formavtorisation from './components/Formavtorisation';

class App extends React.Component{
    

    handlerForm(){
        this.props.avtorisationForm(true)
    }

   
    render(){

        return(
            <div>
              
               
                {!this.props.avtorisation[0].avtorization ? <Formavtorisation/> :  <Mychart/>}
         
                <div>
                
            </div>

            </div>
        )
    }
}


export default connect(
    state=>({
       
        avtorisation : state.avtorisation
    }),
    dispatch=>({
        avtorisationForm:(formData)=>{
            dispatch({
                type: 'AVTORIZATION',
                data: formData
            })}
        
        
    })
)(App);
