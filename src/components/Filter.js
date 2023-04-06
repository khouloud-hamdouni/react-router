import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Filter extends Component {

    constructor() {
        super();

        this.state = {
            Filter: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ Filter: MovieService.getMovies() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.Filter} />
                    </div>
                </div>
            </div>
        );
    }
}