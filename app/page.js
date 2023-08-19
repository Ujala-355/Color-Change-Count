"use client"
import React, { useState } from 'react';
import Colorbox from "./colorbox";
import PinkButton from "./pinkButton";
import BlueButton from "./blueButton";
import GreenButton from "./greenButton";
import BlackButton from "./blackButton";
const Page=()=>{
    const [color,setColor]=useState('');
    const [counts,setCounts]=useState({
        pink:0,
        blue:0,
        green:0,
        black:0,
    });
    const handleColorChange=(newColor)=>{
        setColor(newColor);
        setCounts((prevCounts)=>({
            ...prevCounts,
            [newColor]:prevCounts[newColor]+1
        }))
    }
    return(
       
                
        <>
            <div className="container">
                <Colorbox color={color}/>
                <div className="counts">
                    <div>
                        <p>Red Count: {counts.pink}</p>
                    </div>
                    <div>
                        <p>Blue Count: {counts.blue}</p>
                    </div>
                    <div>
                        <p>Green Count: {counts.green}</p>
                    </div>
                    <div>
                        <p>Black Count: {counts.black}</p>
                    </div>
                </div>
                <div className="buttonsbox">
                    <PinkButton onColorChange={handleColorChange}/>
                    <BlueButton onColorChange={handleColorChange}/>
                    <GreenButton onColorChange={handleColorChange}/>
                    <BlackButton onColorChange={handleColorChange}/>
                </div>
            </div>
            
        </>
    )
};
export default Page;

