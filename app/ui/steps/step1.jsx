'use client'
import React, { useEffect, useState } from "react";
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import { useRef } from "react";
import { setElem, setFormdata, setStep } from "@/app/lib/features/preference/prefSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { useDispatch } from "react-redux";


export const Step1 = () => {
    
    const dispatch = useDispatch()
    const active = useAppSelector((state)=>state.pref.formdata)
   
    
    const handleChange = (e)=>{
       
        if (e.target.name === 'usage'){
          if(e.target.id === 'bulk'){
            dispatch(setFormdata({prefe : true}));
          
          }
          else {
            dispatch(setFormdata({prefe : false})) 
            // setDis(true) 
          }      
        }
        else {

          const {name, value} = e.target
          dispatch(setFormdata({[name]: value }))
            
        }
       
    }
    const handleStep=(e)=>{
      e.preventDefault()
      dispatch(setStep(2))
    }

    
  return (
    <div className=" bg-slate-100 rounded-md ring-1  mt-[5rem] py-8">
      <div className="mx-auto px-4">
        <span className=" flex justify-center text-lg text-center font-semibold">
          Your opinion matters! Help us understand your sourcing needs and preferences
        </span>
      </div>
      <div className="mx-auto">
        <form className="flex flex-col space-y-4 p-4 ">
          <section className="flex items-center space-x-8 mx-auto">
            <Accordion className=" " expanded = {active.data1?.prefe === true}>
              <AccordionSummary>
                <span className="flex items-center justify-between  space-x-60 ">
                  <label className="text-sm font-semibold">Resell</label>

                  <input
                    onChange={handleChange}
                    value={active.data1?.prefe || false}
                    type="radio"
                    checked = {active.data1?.prefe === true}
                    name="usage"
                    id ='bulk'
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails className="space-y-4">
                <span className="text-sm pb-8">
                  which option best describe your business
                </span>
                <div className="space-y-4">
                  <span className="flex items-center justify-between">
                    <label className="font-semibold text-nowrap">Online Retailer</label>
                    <input type="checkbox" onChange={handleChange} className="per"  name="Online-resale" value="yes" />
                  </span>
                  <span className="flex items-center justify-between">
                    <label className="font-semibold">Physical Retailer</label>
                    <input type="checkbox" onChange={handleChange} name="Physical-resale" value="yes"  className="per" />
                  </span>
                  <span className="flex items-center justify-between">
                    <label className="font-semibold">
                      Wholesale/distributor
                    </label>
                    <input type="checkbox" onChange={handleChange} name="distributor" value="yes" className="per" />
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          </section>
          <section className="flex items-center  rounded-b-md  shadow-md bg-white mx-auto p-3">
            <div className="flex justify-between items-start">
              <div>
                <label className=" font-semibold">For personal use</label>
                <pre className="text-slate-600">
                  Purchase product for personal use
                </pre>
              </div>

              <input type="radio" onChange={handleChange} id='personal' name="usage" value="yes" />
            </div>
          </section>
          <section>
            <span className="flex justify-center">
              <button
                disabled={Object.keys(active.data1).length === 0}
                className="px-2.5 py-1.5 rounded-md shadow-md bg-indigo-600 text-white disabled:bg-indigo-300"
                onClick={handleStep}
              >
                {" "}
                continue to selet prefered markets
              </button>
            </span>
          </section>
        </form>
      </div>
    </div>
  );
};

