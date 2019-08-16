// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import Header2 from './Header2';
import SimpleCard from './Card';
import {Link} from 'react-router-dom';

// Function that allows the page to reload.
function reloadThePage(){
    window.location.reload();
} 

// All cards displayed and a button to either exit or try again. Try again will reload the page.
function Games(props) {
    return (<header className="App-Game">
		<Header2/><br/>
		<SimpleCard/><br/>
		<SimpleCard/><br/>
		<SimpleCard/><br/><br/>
		<Link to="/Game"><button type="button" id="menuit" onClick="reloadThePage()">Try Again</button></Link><Link to="/"><button type="button" id="menuit">Exit</button></Link><br/><br/><br/>
		</header>);
}

export default Games;