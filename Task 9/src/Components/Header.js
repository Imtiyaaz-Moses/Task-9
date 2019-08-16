// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import SimpleMenu from './Menu1';

function Header(props) {
    return (<header className="App-header">
    	<br/>
		<h3>Welcome to the Currency Converter</h3><br/>
		<SimpleMenu/><br/>
		</header>);
}

export default Header;