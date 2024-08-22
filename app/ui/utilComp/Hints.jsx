"use client"
import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import { ExpandMore , BusinessCenterOutlined, LocationOnOutlined, StreetviewOutlined, StorefrontOutlined, SettingsPowerRounded } from '@mui/icons-material'
import RelPost from './RelPost';

const Categories = [
  {
    category: "Electronics",
    hint: `Understanding Your Needs Before you dive into the world of electronics, it's crucial to define your specific needs. Ask yourself the following questions:What is the primary purpose of the device? (entertainment, productivity, communication, etc.)
What features are essential? (screen size, storage, camera quality, battery life, etc.)
What is your budget? Do you have any specific brands or models in mind?
By clearly outlining your requirements, you'll narrow down your options and make informed decisions.`,
  },
  {
    category: "DIY & Hardware",
    hint: (
      <>
        <span className="font-semibold">
          {" "}
          **Successful DIY and Hardware Shopping**
        </span>
        <span className="block text-slate-600">
          Effective DIY and hardware shopping requires careful planning and
          research. Begin by clearly outlining your project, considering
          essential features, and setting a budget. Thoroughly compare products,
          read reviews, and prioritize quality and durability. Safety is
          paramount, so invest in protective gear. Consider both online and
          physical stores, taking advantage of discounts and return policies.
          Don't hesitate to seek expert advice from store employees.
        </span>
      </>
    ),
  },
  {
    category: "Apparel & Accessories",
    hint: (
      <>
        <span className="font-semibold">
          **Mastering Apparel and Accessory Shopping**
        </span>
        <span className="block text-slate-600">
          Effective apparel and accessory shopping begins with self-awareness.
          Define your personal style and budget before exploring options.
          Prioritize quality over quantity, considering factors like fabric,
          construction, and fit. Leverage online resources for research,
          comparisons, and reviews. Physical stores offer the advantage of
          trying items on. Always check labels, warranties, and return policies.
          Lastly, accessorize strategically to complement your outfits.
        </span>
      </>
    ),
  },
];

const Hints = ({cat}) => {
   
    const [open, setOpen] = React.useState(false)
  const TextField =  Categories.find(({category})=> category  === cat)
  return (
    <div className="">
       <Accordion elevation={0} disableGutters sx={{border: "none", width: '100vw',   boxShadow: 'none',  "& .MuiAccordion-root": {
        padding: 0,
        bgcolor:"black",
        "::before": { display: "none" },
      }}}>
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-content"
          sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
          onChange={(_, e) => setOpen(e)}
        >
          <div>
            <div className="flex justify-between items-center py-2">
              <h1 className="text-lg font-semibold">Shopper's guide</h1>
              <ExpandMore
                // onClick={() => setOpen((prev) => !prev)}
                sx={{
                  transform: open ? "rotate(180deg)" : "revert",
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            </div>
            <span className='block text-slate-600'>
            Shopping could be at times difficult if you are stucked at making
            the right decisions click here for our shopping guide
          </span>
          </div>
          
        </AccordionSummary>
        <AccordionDetails
          sx={{
            "& .MuiAccordionDetails-root": { padding: 0, pt: 2 },
            mt: 2,
          }}
        >
          {TextField?.hint || "No hint available"}
          <RelPost trigger = {open}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Hints
