import React, { Component } from 'react'
import Header from './Header';
import Dashboard from './Dashboard'
import Graph from './Graph'
import TableView from './TableView'
import Target from './Target'


export class App extends Component {

    state = {measurements:{}, currentDate:""}

    addMeasurment = (weight) => {
        const measurements = {...this.state.measurements}
        measurements[`weight${Date.now()}`] = weight
        this.setState({measurements})

    }

    updateMeasurement = () => {

    }



    render() {

        return (
            <div className="ui container">
                <Header/>
                <div className="ui center aligned padded grid">
                    <div className="eight wide column">
                        <div className="ui segment">

                    <Dashboard/>
                        </div>
                    </div>
                    <div className="ui eight wide column">
                    <div className="ui segment">
                    <Graph/>
                    </div>
                    <div className="ui segment">
                    <Target/>
                    </div>
                    </div>

                </div>
                <div className="ui center aligned padded grid">
                    <div className="sixteen wide column">

                        <TableView/>

                    </div>
                </div>
            </div>

        )
    }
}

export default App
