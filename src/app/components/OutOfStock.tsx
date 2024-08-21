"use client"
import React, { useState } from "react";
import { FaCartPlus, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
export default function OutOfStock(){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
    return(
        <div className="flex">
            <FaCirclePlus onClick={toggle} className="text-green-600 btn btn-circle scale-50 mt-0"/>
            <div style={{
        display: showMe?"block":"none",
        color: "red",
        fontFamily: "inherit"
      }}>
        This product is out of stock
      </div>
        </div>
    )
}