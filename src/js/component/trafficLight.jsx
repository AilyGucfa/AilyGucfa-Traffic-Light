import React, {useEffect, useState} from "react";

const TrafficLight = () =>{

    const [chosenColor , setChosenColor] = useState ("")
    const [toggleLight , setToggleLight] = useState(false)

    useEffect (() =>{
        let interval;

        if(toggleLight){
            interval = setInterval(() =>{
                setChosenColor((prevLight) => {
                    if(prevLight === "red"){
                        return "green";
                    }
                    else if (prevLight === "green"){
                        return "yellow";
                    }
                    else{
                        return "red";
                    }    
                });
              
            },3000);

        }
        return () =>{
            clearInterval(interval);
        };

    },[toggleLight]);
              
    const toggleButton = () =>{
        setToggleLight((prevToggle) => !prevToggle);

    }

    return (
        <>

            <div className="traffic-Light-stem"></div>
            <div className="traffic-light-body">
                <div 
                    className={chosenColor === "red"? "red-light selected" : "red-light"} 
                    onMouseOver={() => setChosenColor ("red")}
                ></div>
                
                <div 
                    className={chosenColor === "yellow"? "yellow-light selected" : "yellow-light"}
                    onMouseOver={() => setChosenColor("yellow")}
                ></div>

                <div 
                    className={chosenColor === "green"? "green-light selected" : "green-light"}
                    onMouseOver={() => setChosenColor ("green")}
                
                
                ></div>

            </div>
           
            <div className="button">
                <button className="btn btn-info mt-3" onClick={toggleButton}>Click To Toggle</button>
            </div>

        </>

    );
};

export default TrafficLight;
