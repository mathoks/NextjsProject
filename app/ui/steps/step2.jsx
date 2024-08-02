"use client";
import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import { useRef } from "react";
import {
  setElem,
  setFormdata,
  setStep,
  setIsComplete,
} from "@/app/lib/features/preference/prefSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { useDispatch } from "react-redux";
import { locations } from "@/app/lib/utills/allstates";
import addPreferenc from "@/app/lib/actions/addPreferenc";

import toast from 'react-hot-toast'
export const Step2 = () => {
  const [loading, setLoading] = useState(false) 
  const ref = useRef(null);
  const dispatch = useDispatch();
  const active = useAppSelector((state) => state.pref.formdata);
  const [mart, setMart] = useState([]);
  const deferedV = useDeferredValue(mart);
  const handleChange = useCallback((e) => {
    if (e.target.name === "searchC") {
      if (mart.length > 0) setMart([]);
      ref.current = e.target.value;
      const matchedLocation = locations.find(({ country }) => {
        return country.toLowerCase() === ref.current.toLowerCase();
      });

      if (matchedLocation !== undefined) {
        const newArray = matchedLocation.state.flatMap(
          ({ markets }) => markets
        );

        const Entries = [...new Set(newArray.map(JSON.stringify))].map(
          JSON.parse
        );
        setMart([...Entries]);
        dispatch(setFormdata({country: ref.current}));
      }
       
    }
    const { type, value } = e.target;

    if (type === "checkbox") {
     dispatch(setFormdata(value));
      dispatch(setIsComplete(true));
    }
    
  }, []);

 

  const submit = async (e) => {
    const notify = (m) => toast(m);
    setLoading(true) 
    e.preventDefault();
    const marts = active.data2
    const country = active.place.country
    const formField ={...active.data1, marts, country }
    
     
    const {error, success} = await addPreferenc(formField)
    if(success){
        dispatch(setIsComplete(true))
        notify('Thanks preferences saved')
        setLoading(false)
    }
    else if(error){
        notify(error)
        setLoading(false)
    }
  };

  return (
    <div className=" bg-slate-100 rounded-md ring-1  mt-[5rem]">
      <div className="mx-auto px-4 ">
        <span className=" flex justify-center text-xl   font-semibold px-8">
          Let us know your prefered shopping location
        </span>
      </div>
      <div className="mx-auto">
        <form className="flex flex-col space-y-4 p-4 ">
          <section className="flex items-center justify-center mx-auto">
            <Accordion className="" expanded={ref.current}>
              <AccordionSummary sx={{ justifyItems: "center" }}>
                <span className="space-y-2 mx-auto">
                  <div>
                    <label className="text-sm font-semibold mr-2">
                      Enter a country
                    </label>
                  </div>

                  <input
                    onChange={handleChange}
                    ref={ref}
                    type="search"
                    name="searchC"
                    id="filter"
                    className="ring-1 p-1 rounded-md"
                  />
                </span>
              </AccordionSummary>
              <AccordionDetails className="space-y-4">
                <span className="text-sm pb-8">
                  Your prefared shopping markets
                </span>
                <div className="space-y-4">
                  {mart.length > 0 ? (
                    deferedV.map(({ market }, id) => (
                      <span
                        key={id}
                        className="flex items-center justify-between"
                      >
                        <label className="font-semibold text-nowrap">
                          {market}
                        </label>
                        <input
                          type="checkbox"
                          onChange={handleChange}
                          name={id}
                          className={"markk"}
                          value={market}
                        />
                      </span>
                    ))
                  ) : (
                    <CircularProgress size={20} className=" text-white" />
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          </section>
          <section>
            <span className="flex justify-end">
              <button
                disabled={Object.keys(active.place).length === 0 || active.data2.length === 0 || loading}
                className="px-8 py-1.5 rounded-md shadow-md bg-indigo-600 text-white disabled:bg-indigo-300"
                onClick={submit}
              >
                {" "}
                save
              </button>
            </span>
          </section>
        </form>
      </div>
    </div>
  );
};
