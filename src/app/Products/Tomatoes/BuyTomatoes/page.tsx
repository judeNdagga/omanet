"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowDropup, IoMdAddCircle, IoMdAddCircleOutline } from "react-icons/io";
import { FaCartPlus, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
export default function BuyTomatoes(){
  
    return(
      <div className="overflow-hidden">
      {/* 2nd level */}
      <div className="bg-white">
        
        <div className="sm:flex gap-10 pl-10 sm:pl-16 pr-10 sm:pr-0 pt-20 sm:pt-24">


        <div className="card sm:w-[40em] h-[30em] sm:h-[37em] bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1562695530-ca03c4b98623?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
  <div className="rounded-xl card-body bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%">
    <h2 className="card-title">
      Local Tomatoes
      <div className="badge bg-red-600 border-none text-white">OUT OF STOCK</div>
    </h2>
    <p>High quality organic tomatoes from organic farms in Uganda</p>
    <div className="card-actions justify-end pt-5">
      <div className="badge badge-outline">Box Of 40 Tomatoes</div> 
      
    </div>
  </div>
</div>

<div>
<h1 className="text-black text-4xl sm:text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] pt-6 sm:pt-0">
          HIGH QUALITY TOMATOES
        </h1>

        <div className="pt-3 sm:pt-10 flex">
          <h1 className="text-black">Quantity :</h1>
          <FaCircleMinus className="text-green-600 btn-circle scale-50 mt-0"/>
          <input type="text" className="input input-bordered max-w-20 h-8 bg-white text-black border-slate-500 border-2" />
          <FaCirclePlus className="text-green-600 btn-circle scale-50 mt-0"/>
      <div className="btn btn-sm hover:text-white"><h1>Add to cart</h1><FaCartPlus className="text-white"/></div>    
        </div>
        <div className="pt-3 sm:pt-10 flex gap-10">
          <h1 className="text-black">Price :</h1>
          <h1 className="text-lime-500">Ugx. 12,000</h1>
          
        </div>
        <div className="pt-3 sm:pt-10 flex gap-10">
          <h1 className="text-black">Total :</h1>
          <h1 className="text-lime-500">Ugx. 12,000</h1>
          
        </div>
        <div className="pt-10 sm:pt-20">
          <div className="btn btn-wide text-white bg-slate-800"> CHECK OUT</div>
        </div>
</div>
          

        

        
        </div>

        {/* after second cards */}

        <div className="sm:p-20 p-10">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-mono">
              NEED SOMETHING ELSE?
            </h1>
            <p className="sm:pt-16 sm:pr-20 text-xl sm:text-2xl font-extralight">
              Whether you’re in Healthcare, CPG, Chemicals, or another industry,
              we offer AI & Data solutions and expert guidance so you can claim
              a leading spot in your market.To access product knowledge and
              serve our customers more efficiently, we decided to build an
              intelligent knowledge base.
            </p>
            <div className="btn btn-wide mt-5 sm:mt-28 bg-slate-900 hover:bg-gray-100 border-none hover:text-black text-white">
              <h1 className="text-xl flex gap-10">
                Let's Talk
                <BsArrowRight className="text-3xl animate-pulse" />
              </h1>
            </div>
          </div>
        </div>

        {/* after need something */}

        <div className="sm:pt-40 sm:pb-40 sm:flex sm:pl-20 pr-20 h-[35em]">
          <h1 className="text-black font-bold font-mono text-5xl sm:text-6xl pl-4 sm:pl-10 sm:pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider lg:divider-horizontal divider-success"></div>
          <h1 className="text-right text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40">
          <div className="card card-body shadow-xl">
            <p className="text-black text-3xl sm:text-4xl font-extralight">
              "To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application. Their
              technical expertise, professional communication, and excellent
              project management made it a great pleasure to collaborate."
            </p>
          </div>
          <p className="sm:text-right text-center text-black pt-10 text-3xl">
            - Jane Nalunga
            <p className="text-2xl font-light text-green-600">Team Lead</p>
          </p>
        </div>

        <div className="text-center h-[20em]">
          <div
            className="btn bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75% border-none mt-20 hover:btn-lg"
          >
            <h1 className="text-white">Discover More Case Studies</h1>
          </div>
        </div>
      </div>
    </div>
    )
}