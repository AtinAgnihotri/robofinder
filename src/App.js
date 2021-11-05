import React, { Component } from "react";
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        // const searchFieldValue = event.target.value;
        this.setState({searchField: event.target.value});
        // this.state.searchField = searchFieldValue;
        // if (this.state.searchField !== "") {
        //     const filteredRobots = robots.filter(robot => {
        //         const nameMatch = robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
        //         const userNameMatch = robot.username.toLowerCase().includes(searchFieldValue);
        //         const emailMatch = robot.email.toLowerCase().includes(searchFieldValue.toLowerCase());
        //         return nameMatch || userNameMatch || emailMatch;
        //     });
        //     // this.state.robots
        // } else {
        //     this.state.robots = robots;
        // }
    }

    componentDidMount() {
        let current = this;
        console.log(this.state.robots)
        setTimeout(function () {
            
            console.log("Robots loaded")
            current.setState({ robots: robots });
        }, 1000);
        
    }

    render() {
        const searchFieldValue = this.state.searchField;
        const filteredRobots = this.state.robots.filter(robot => {
            const nameMatch = robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
            const userNameMatch = robot.username.toLowerCase().includes(searchFieldValue);
            const emailMatch = robot.email.toLowerCase().includes(searchFieldValue.toLowerCase());
            return nameMatch || userNameMatch || emailMatch;
        });

        return(
            <div className="tc">
                <h1 className="f2">Robofinder</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <hr />
                <CardList robots={filteredRobots}/>
            </div>  
        );
    }
}

export default App;