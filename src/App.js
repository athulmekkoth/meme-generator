import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Meme  from './components/Meme';
import "./style.css"

export default function App()
{
    return(
        <div>
        <Header/>
        <Meme />
        </div>
    )
}