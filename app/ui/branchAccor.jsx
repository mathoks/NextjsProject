"use client"
import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import { ExpandMore , BusinessCenterOutlined, LocationOnOutlined, StreetviewOutlined, StorefrontOutlined, SettingsPowerRounded } from '@mui/icons-material'


const BranchAccor = ({branches = []}) => {
    const [open, setOpen] = React.useState(false)
  if(branches.length === 0) return null
  if(branches.length === 1) {
    const {branch:{market, branchAddress, branchName, state, country} } = branches[0]
    return (
      
        
          <div  className='flex flex-col '> 
          <span className='flex space-x-2 items-center' ><span><BusinessCenterOutlined fontSize='meduim'/></span><span className='font-semibold first-letter:uppercase'>{branchName}</span></span>
          <span className='flex space-x-2 items-center' ><span><StreetviewOutlined fontSize='meduim'/></span><span>{branchAddress}</span></span>
          <span className='flex space-x-2 items-center' ><span><LocationOnOutlined fontSize='meduim'/></span><span>{market + " " + state + " " +  country}</span></span>
          </div>
      
    )
  }
  else {
const Summary = branches.map(({branch:{market, branchAddress, branchName, state, country} }, index) => {
    return (
      <React.Fragment key={index}>
        {index === 0 && (
          <AccordionSummary
            // expandIcon = {<ExpandMore sx={{top: -65,  position: 'absolute'}}/>}
            aria-controls="panel-content"
            id="panel-content"
            sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
          >
            <div key={index} className="flex flex-col w-screen px-4">
            <div className='flex justify-between items-center'>
            <div className="flex space-x-1 items-center  font-semibold">
                <StorefrontOutlined
                  fontSize="meduim"
                  className="text-slate-800 "
                />
                <span className="text-semibold text-base">Store Branches</span>
              </div>
              <ExpandMore sx={{transform  : open ? 'rotate(180deg)' : 'revert', transition: 'transform 0.5s ease-in-out'}} />
            </div>
              
              <span className="flex space-x-2 items-center">
                <span>
                  <BusinessCenterOutlined fontSize="meduim" />
                </span>
                <span className="font-semibold first-letter:uppercase">
                  {branchName}
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span>
                  <StreetviewOutlined fontSize="meduim" />
                </span>
                <span>{branchAddress}</span>
              </span>
              <span className="flex space-x-2 items-center">
                <span>
                  <LocationOnOutlined fontSize="meduim" />
                </span>
                <span>{market + " " + state + " " + country}</span>
              </span>
            </div>
          </AccordionSummary>
        )}
        <AccordionDetails
          sx={{
            "& .MuiAccordionDetails-root": { padding: 0, pt: 0 },
            mt: -2,
          }}
        >
          {index !== 0 && (
            <div key={index} className="flex flex-col ">
              <span className="flex space-x-2 items-center">
                <span>
                  <BusinessCenterOutlined fontSize="meduim" />
                </span>
                <span className="font-semibold first-letter:uppercase">
                  {branchName}
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span>
                  <StreetviewOutlined fontSize="meduim" />
                </span>
                <span>{branchAddress}</span>
              </span>
              <span className="flex space-x-2 items-center">
                <span>
                  <LocationOnOutlined fontSize="meduim" />
                </span>
                <span>{market + " " + state + " " + country}</span>
              </span>
            </div>
          )}
        </AccordionDetails>
      </React.Fragment>
    );
})
  return (
      <Accordion elevation={0} disableGutters sx={{border: "none", width: '100vw', ml:-2, mt:-1, pt:-1,  boxShadow: 'none',  "& .MuiAccordion-root": {
        padding: 0,
        bgcolor:"black",
        "::before": { display: "none" },
      }}}
      onChange={(_, e)=>setOpen(e)} >
          {Summary}     
    </Accordion>

  )
}
}

export default BranchAccor
