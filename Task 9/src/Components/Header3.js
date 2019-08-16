// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import SimpleMenu from './MainM';

function Header3(props) {
    return (<header className="App-header3">
    	<br/>
		<h3>Welcome User</h3><br/>
		<h4>Please select an option below:</h4><br/>
		<SimpleMenu/><br/>
		</header>);
}

export default Header3;