import {useState} from "react";

const Semaforo = () => {
    const [color, setColor] = useState("");
 
     return (
         <div>
             <div className="palito"></div>                
             <div className="luces">
                <div onClick={() => setColor("red")} className={"light-red" + (color === "red" ? " brillo" : "" )}></div>
                <div onClick={() => setColor("yellow")} className={"light-yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                <div onClick={() => setColor("green")} className={"light-green" + (color === "green" ? " brillo" : "" )}></div>
             </div>
         </div>
     );
    };
    
export default Semaforo;