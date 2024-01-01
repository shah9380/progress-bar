import { useEffect, useState } from "react";
import './ProgressBar.css';

const ProgressBar = ({value = 0 })=>{
    let[percent,setPercent] = useState(value);
    // console.log(value);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(0,value)));
    },[value])
    return(
        <div className="h-4 flex justify-center items-center w-full border border-black max-w-[500px] mx-auto text-center relative bg-gray-400/50" style={{borderRadius: "12px"}}>
            <div className="flex justify-center items-center z-10">
                <span className="text-[12px] font-medium" style={{color: percent>49?"white":"black"}}>{percent}</span>
                <span className="text-[12px]" style={{color: percent>49?"white":"black"}}>%</span>
            </div>
            <div className="h-full bg-green-600 flex items-center justify-end absolute left-0" style={{width:`${percent}%`, borderRadius: percent>98?"12px":"12px 0px 0px 12px"}}>
                <div className="ball bg-cyan-800 w-2 rounded-full h-2 border border-black"></div>
            </div>
        </div>
    )
}
export default ProgressBar;