import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Link to={'/all'}>
                    <img src='../images/beers.png' alt='new-beer'/>
                    <h4>All Beers</h4>
                    <p>info</p>
                </Link>
                <Link to={'/random'}>
                    <img src='../images/random-beer.png' alt='random-beer'/>
                    <h4>Random Beer</h4>
                    <p>info</p>
                </Link>
                <Link to={'/new'}>
                    <img src='../images/new-beer.png' alt='new-beer'/>
                    <h4>New Beer</h4>
                    <p>info</p>
                </Link>
            </React.Fragment>
        )
    }
}

export default Home