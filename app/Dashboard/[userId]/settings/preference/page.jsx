'use client'
import React, { useEffect, useState } from "react";
import { Step1 } from "@/app/ui/steps/step1";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import { resetSlice, setElem, setStep } from "@/app/lib/features/preference/prefSlice";
import { Step2 } from "@/app/ui/steps/step2";
import { ArrowBack } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import ProgressBar from "@/app/ui/utilComp/ProgressBar";
import { useRouter } from "next/navigation";


const Page = (props) => {
   const [element, setElement] = useState()
   const [prog, setProg] = useState([0, 0])
  
  const step = useAppSelector((state) => state.pref.step);
const router = useRouter()
  const formdata = useAppSelector((state)=>state.pref.formdata)
  const dispatch = useDispatch()
 
  useEffect(() => {
    console.log(formdata)
      if(step === 1){
        setElement(<Step1/>);
       const leng = formdata.data1 ? Object.keys(formdata.data1)?.length : null ;
            if(leng === 1)  setProg((prev)=> {prev[0] = 50; return [...prev]});
            else if(leng > 1)  setProg((prev)=> {prev[0] = 100; return [...prev]});
            else {}
          }
  
      
      else {
    
        setElement(<Step2/>)
        if(Array.isArray(formdata.data2) && formdata.data2.length > 0){
          console.log(Array.isArray(formdata.data2))
          setProg((prev)=> {prev[1] = 100; return [...prev]});
        }
         
          else  setProg((prev)=> {prev[1] = 0; return [...prev]});
      
      }   
    },[step, formdata]);
  
    // useEffect(()=>{
    //     setstep({page: <Step1 handler={setstep} value={step.formdata} />, formdata: {}, })
    // }, [])

     return (
    <div className=" px-4 space-y-8 pt-14">
      <div className="flex justify-between">
       {step == 2 ? <ArrowBack onClick ={()=> {dispatch(setStep(step-1)); dispatch(resetSlice('partial'))}}/> : <ArrowBack onClick ={()=>{router.back();  dispatch(resetSlice('all'))}}/>}
       <span className="font-semibold">
        Sourcing preferences
       </span>
       <span className="font-semibold">
        
       </span>
      </div>
      <div className="flex justify-center space-x-2 items-center">
      <span className="text-slate-400">
        { `Step ${step} of 2`} 
      </span>
      <div className="w-10">
      <ProgressBar  value={prog[0]} />
      </div>
     <div className="w-10">
     <ProgressBar value={prog[1]}/>
     </div>
      
      </div>
      {element}  
    </div>
  );
};

export default Page;
