// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import SimpleMenu from './Menu2';

function Header2(props) {
    return (<header className="App-header2">
    	<br/>
		<h3>Welcome to the Mini Card Game</h3><br/>
		<SimpleMenu/><br/>
		</header>);
}

export default Header2;