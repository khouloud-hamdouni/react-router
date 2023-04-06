import React, { Component } from 'react';
import Filter from './components/Filter';
import Header from './Header';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Filter />
                </div>
            </div>
        );
    }
}
