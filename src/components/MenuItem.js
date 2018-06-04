/**
 * Created by celer on 5/15/2018.
 */
import React, { Component } from 'react';
import '../css/header.css'
import {Link} from "react-router-dom";
class MenuItem extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        let link = '/';
        if(this.props.data.name==='Active'){
            link = '/active'
        }
        else if(this.props.data.name==='Completed'){
            link='/completed'
        }
        else if(this.props.data.name==='About'){
            link='/about'
        }
        else{
            link='/all'
        }
        return (<Link to={link}><li data-dedata={this.props.data.dataDedata} className={this.props.isActive ? "active" : null} onClick={this.props.handleClick}>{this.props.data.name}</li></Link>)
    }
}
export default MenuItem;