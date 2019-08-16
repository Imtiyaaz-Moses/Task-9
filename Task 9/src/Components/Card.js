import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Pie from '../Images/chicken.jpg';

// Function that has an array, which will display a message on the card. The message that will be displayed will be randomly selected.
function Arr() {
    var myArray = ["Winner Winner Chicken Dinner!", "Try Again!"];
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return (
        randomItem
    );
}

// The function that will allow the card to flip back and forth.
function SimpleCard() {
    return (<card>
        <div class="flip">
  			<div class="fci">
    			<div class="frontofcard">
    				<img src={Pie} alt="Prize" />
    			</div>
   				<div class="backofcard">
   				<Arr/>		
    			</div>
  			</div>
		</div>
		</card>);
}
export default SimpleCard;