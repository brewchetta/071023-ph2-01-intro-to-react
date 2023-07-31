import React from 'react';
import ReactDOM from 'react-dom/client';
import CatList from './components/CatList' 

const rootDiv = document.querySelector('#root')

let number = 1000

const root = ReactDOM.createRoot( rootDiv );
const AwesomeCatList = CatList

root.render( 
    <>
        <p>Number is: { number }</p>
        <CatList />
        { console.log(`Hello I am at the end of the render and number is ${number}`) }
    </>        
);
