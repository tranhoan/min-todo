/**
 * Created by celer on 5/14/2018.
 */
import React, { Component } from 'react';
import '../css/header.css'
import MenuItem from "./MenuItem";

class Header extends Component {
        constructor(props){
        super(props);
    }
    render() {
        let menuList = this.props.menuList.map(function(tab){
            return (
                <MenuItem data={tab} currentTab={this.props.activeTab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
            );
        }.bind(this));
        return (
            <div className="wrapper">
                <nav>
                    <div style={{marginLeft: this.props.marginLeft}}></div>
                    <ul>
                        { menuList }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
