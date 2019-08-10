import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <h1>First REact App</h1>
    );
}

function Hobby(props){
    return (
        <li>{props.name}</li>
    )
}

class Friend extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.location}</p>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

const hobbies = [
    "Coding",
    "Reading",
    "Music"
];

const person = {
    "name": "Chintan Palan",
    "age": 25,
    "location": "Thane"
};

class AppComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>{person.name}</h1>
                <h1>{person.age}</h1>
                <p>Hobbies</p>
                <ul>
                    { hobbies.map(hobby => <Hobby key={hobby} name={hobby} />) }
                </ul>
                <Friend name="Jeffin" location="Thane"></Friend>
                <Friend name="Jeffin New" location="Thane 3"></Friend>
            </div>
        );
    }
}


export default AppComponent;
