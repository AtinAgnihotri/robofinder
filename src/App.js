import React from "react";
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from './SearchBox';

const App = (props) => {
    return (
        <div className="tc">
            <h1>Robofinder</h1>
            <SearchBox />
            <hr />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;