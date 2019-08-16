import React, { Component,Fragment } from 'react'
import logo from '../WeightyLogo.png'
import PropTypes from 'prop-types'



export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                <div className="ui right floated segment basic">
                    <button className="ui button">Logout</button>
                </div>

            <div className="ui center aligned basic segment">
                <h1>Weighty</h1>
                {/* <img className="ui centered image small"src={logo}></img> */}
                <div class="ui horizontal divider">
                    14th August 2019
                </div>
            </div>
        </Fragment>
        )
    }
}

export default Header
