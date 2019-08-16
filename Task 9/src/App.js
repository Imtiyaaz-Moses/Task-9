// This is importing the components needed to make the app work.
// React, CSS, and some components from the components folder are being imported.
import React,{Component} from 'react';  
import './App.css';
import Header3 from './Components/Header3';

// This will render and display the content needed.
class App extends Component {
    render() {
        return (
// This(link tag) is inserting bootstrap, so its components can work and function properly.
            <div className="App">
    <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
      <Header3/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      </div>
      // These tags above, will display the content on the page.
        );
    }
}

export default App;
