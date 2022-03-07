import React from 'react';
import ReactDOM from 'react-dom';

function Numberlist(props){
  const numbers=props.numbers;
  const listItems=numbers.map((number)=> <li>{number}</li>)
  return(
   <ul>{listItems}</ul>
  )

  

}

const numbers=[1,2,3,4];
ReactDOM.render(
  <Numberlist numbers={numbers}/>
 , document.getElementById('root')
);


