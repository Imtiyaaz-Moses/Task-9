// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import Header from './Header';
import Calculator from './Convert';

function CC(props) {
    return (<header className="App-CC">
		<Header/><br/>
		<Calculator/>
		</header>);
}

export default CC;