import React, { Component } from 'react'
import Banner from './Banner'
import MyLifeTimeline from './MyLifeTimeline';
import { Modal, Button } from 'react-materialize';
import MyCard from "./MyCard"

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
