import React, { Component } from 'react'
import Banner from './Banner'
import MyLifeTimeline from './MyLifeTimeline';
import Test from './Test';


export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <MyLifeTimeline/>       
            </div>
        )
    }
}
