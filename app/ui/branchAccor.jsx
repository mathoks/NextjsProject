"use client"
import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import { ExpandMore , BusinessCenterOutlined, LocationOnOutlined, StreetviewOutlined } from '@mui/icons-material'

const BranchAccor = ({branches = []}) => {
  if(branches.length === 0) return null
  if(branches.length === 1) {
    const {branch:{market, branchAddress, branchName, state, country} } = branches[0]
    return (
      <div>
        <Accordion sx={{border: "none", boxShadow: 'none', }} >
          <AccordionSummary
          expandIcon = {<ExpandMore/>}
          aria-controls='panel-content'
          id='panel-content'
          className='font-semibold text-center mx-auto text-lg'
          >
          <div  className='flex flex-col '> 
          <span className='flex space-x-2 items-center' ><span><BusinessCenterOutlined fontSize='meduim'/></span><span className='font-semibold first-letter:uppercase'>{branchName}</span></span>
          <span className='flex space-x-2 items-center' ><span><StreetviewOutlined fontSize='meduim'/></span><span>{branchAddress}</span></span>
          <span className='flex space-x-2 items-center' ><span><LocationOnOutlined fontSize='meduim'/></span><span>{market + " " + state + " " +  country}</span></span>
          </div>
          </AccordionSummary>
        </Accordion>
      </div>
    )
  }
  else {
const Summary = branches.map(({branch:{market, branchAddress, branchName, state, country} }, index) => {
    return (
        <React.Fragment key={index}  >
       { index === 0 && (
        <AccordionSummary
        
        expandIcon = {<ExpandMore sx={{top: -65,  position: 'absolute'}}/>}
        aria-controls='panel-content'
        id='panel-content'
        sx={
            {"& .MuiAccordionSummary-root": { padding: 0 } }
        }
        > 
        <div key={index} className='flex flex-col '> 
        <span className='flex space-x-2 items-center' ><span><BusinessCenterOutlined fontSize='meduim'/></span><span className='font-semibold first-letter:uppercase'>{branchName}</span></span>
        <span className='flex space-x-2 items-center' ><span><StreetviewOutlined fontSize='meduim'/></span><span>{branchAddress}</span></span>
        <span className='flex space-x-2 items-center' ><span><LocationOnOutlined fontSize='meduim'/></span><span>{market + " " + state + " " +  country}</span></span>
        </div>
        </AccordionSummary>)}
        <AccordionDetails sx={{"& .MuiAccordionDetails-root": { padding: 0 } }}>
        { index !== 0 && (
            <div key={index} className='flex flex-col '> 
        <span className='flex space-x-2 items-center' ><span><BusinessCenterOutlined fontSize='meduim'/></span><span className='font-semibold first-letter:uppercase'>{branchName}</span></span>
        <span className='flex space-x-2 items-center' ><span><StreetviewOutlined fontSize='meduim'/></span><span>{branchAddress}</span></span>
        <span className='flex space-x-2 items-center' ><span><LocationOnOutlined fontSize='meduim'/></span><span>{market + " " + state + " " +  country}</span></span>
        </div>)} 
        </AccordionDetails>
       
        </React.Fragment>
    )
})
  return (
      <Accordion elevation={0} disableGutters sx={{border: "none", boxShadow: 'none',  "& .MuiAccordion-root": {
        padding: 0,
        "::before": { display: "none" },
      }}} >
          {Summary}     
    </Accordion>

  )
}
}

export default BranchAccor
