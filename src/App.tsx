import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Last from "./components/last/Last";
import Special from "./components/special/Special";
import Subscription from "./components/subscription/Subscription";
import Extreme from "./components/extreme/Extreme";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className="App">

            <Header/>
            <Last/>
            <Special/>
            <Subscription/>
            <Extreme/>
            <Footer/>
        </div>
    );
}

export default App;
