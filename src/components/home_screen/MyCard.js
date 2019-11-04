import React, { Component } from 'react'
import {Row,Col,Card, CardTitle} from "react-materialize"
export default class MyCard extends Component {
    render() {
        return (
            <div class="row">
            <div class="col s12 m7">
                <div class="card">
                <div class="card-image">
                    <img src={this.props.imageSrc}></img>
                    <span class="card-title"></span>
                </div>
                <div class="card-content">
                    <p>Virtual McSlap</p>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
