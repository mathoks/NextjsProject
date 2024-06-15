import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";

const Categories = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  const hanlesSelection = useCallback((id) => {
    setactiveIndex(id);
  }, [activeIndex]);

  const cats = [
    { id: 0, name: "All category" },
    { id: 1, name: "Electronics" },
    { id: 2, name:  "Furniture" },
    { id: 3, name:   "Safty"  },
    { id: 4, name: "Auto Parts" },
    { id: 5, name:  "Baby Items"},
    { id: 6, name: "Mobile Phone" },
    { id: 7, name: "Phone Accesories" },
    { id: 8, name: "General Articles" },
    { id: 9, name: "Machine Parts" },
    { id: 10, name: "Hairs & Wigs" },
    { id: 11, name: "Toys & Games" },
    { id: 12, name: "Home Interior & Decor" },
    { id: 13, name: "Bags & Luggages" },
    { id: 14, name:  "Building Materials"},
    { id: 15, name: "Jewelries and Watches" },
    { id: 16, name: "Musical Instruments" },
    { id: 17, name: "Tools and Hardware" },
    { id: 18, name: "Home Appliances" },
    { id: 19, name: "Chemicals" },
    { id: 20, name: "Food & Beverage" },
    { id: 21, name: "Metals & Alloys" },
    { id: 23, name: "Gifts & Craft" },
    { id: 24, name: "School & Office Supplies" },
    { id: 25, name: "Ligths & Lighting" },
    { id: 26, name: "Apperal & Accessories"},
    { id: 27, name: "Cosmetics & Beauty"},
    { id: 28, name: "Power Transmission" },
    { id: 29, name: "Rubber & Plastics" }









  ];
  
  const Category = React.memo(function Category(){
    return cats.map((cat, index) => (
      <Chip
        label={cat.name}
        key={cat.id || index}
        onClick={() => hanlesSelection(cat.id)}
        sx={{
          "&.MuiChip-clickable": {
            color: cat.id === activeIndex ? "rgb(109, 14, 198)" : "inherit",
            backgroundColor:
              cat.id === activeIndex ? "rgb(211, 191, 230)" : "#f7f7f7",
          },
        }}
      />
    ));
  }, [cats]);
  return (
    <Accordion
      elevation={0}
      disableGutters={true}
      expanded
      sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="Category"
        id="category-mart"
        sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
      >
        <Typography sx={{ fontWeight: 600 }}>Category</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ "& .MuiAccordionDetails-root": { padding: 0 } }}>
        <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
          <Category />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default Categories;
