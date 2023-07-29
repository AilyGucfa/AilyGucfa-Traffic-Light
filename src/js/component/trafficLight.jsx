import React, {useState} from "react";

const TrafficLight = () =>{

    const [chosenColor , setChosenColor] = useState ("")
    const [toggleLight , setToggleLight] = useState()
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

        </>

    );
};

export default TrafficLight;
