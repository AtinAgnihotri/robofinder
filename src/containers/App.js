import React, { Component } from "react";
import CardList from '../components/CardList';
import Scroll from "../components/Scroll";
import SearchBox from '../components/SearchBox';

class App extends Component {
    /*
        constructor >> render >> componentDidMount >> render
    */
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount() {
        // let current = this;
        // console.log(this.state.robots)
        // setTimeout(function () {
            
        //     console.log("Robots loaded")
        //     current.setState({ robots: robots });
        // }, 1000);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                console.log(users);
                this.setState({ robots: users});
            });
        
    }

    getFilteredRobot() {
        const {robots, searchField} = this.state;
        const searchFieldLowerCased = searchField.toLowerCase();
        return robots.filter(robot => {
            const nameMatch = robot.name.toLowerCase().includes(searchFieldLowerCased);
            const userNameMatch = robot.username.toLowerCase().includes(searchFieldLowerCased);
            const emailMatch = robot.email.toLowerCase().includes(searchFieldLowerCased);
            return nameMatch || userNameMatch || emailMatch;
        });
    }

    getNumberOfRobots() {
        return this.state.robots.length;
    }

    getLoadingState() {
        return <h1 className="f2 tc">Loading . . .</h1>;
    }

    getLoadedState() {
        return(
            <div className="tc">
                <h1 className="f2">Robofinder</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <hr />
                <Scroll>
                    <CardList robots={this.getFilteredRobot()}/>
                </Scroll>
            </div>  
        );
    }

    render() {
        return (!this.getNumberOfRobots()) ? this.getLoadingState() : this.getLoadedState();
    }
}

export default App;