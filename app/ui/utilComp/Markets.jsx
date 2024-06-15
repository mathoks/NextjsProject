import { Chip } from "@mui/material";
import React, { memo, useState } from "react";



const LagosMarkets = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  const handleClick = (id) => {
    console.log(id);
    setactiveIndex(id);
  };

  const Markets = memo(function Markets(){
    const marts = [
      {id: 0, name: "All"},
      { id: 1, name: "Alaba International" },
      { id: 2, name: "Ladikpo" },
      { id: 3, name: "TradeFare" },
      { id: 4, name: "Computer Village" },
      { id: 5, name: "Aswani Market" },
      { id: 6, name: "Balogun" },
    ];
    return marts.map((chip, id) => (
      <Chip
        sx={{
          "&.MuiChip-clickable": {
            color: chip.id === activeIndex ? "rgb(109, 14, 198)" : "inherit",
            backgroundColor:
              chip.id === activeIndex ? "rgb(211, 191, 230)" : "#f7f7f7",
          },
        }}
        onClick={() => handleClick(chip.id)}
        key={chip.id || id}
        label={chip.name}
        clickable
      />
    ));
  });
  return <Markets />;
};

const AbaMarket = () => {
    const [activeIndex, setactiveIndex] = useState(null);
    const handleClick = (id) => {
      console.log(id);
      setactiveIndex(id);
    };
  
    const AbaMarkets = memo(function AbaMarkets(){
      const marts = [
        {id: 0, name: "All"},
        { id: 1, name: "Ariria International" },
        { id: 2, name: "New Market" },
        { id: 3, name: "Shopping Center" },
        { id: 4, name: "Cemetery Market" },
        { id: 5, name: "Kent Market" },
        { id: 6, name: "Alaoji Market" },
        { id: 7, name: "Ekeoha Market" },
      ];
      return marts.map((chip, id) => (
        <Chip
          sx={{
            "&.MuiChip-clickable": {
              color: chip.id === activeIndex ? "rgb(109, 14, 198)" : "inherit",
              backgroundColor:
                chip.id === activeIndex ? "rgb(211, 191, 230)" : "#f7f7f7",
            },
          }}
          onClick={() => handleClick(chip.id)}
          key={chip.id || id}
          label={chip.name}
          clickable
        />
      ));
    }, []);
    return <AbaMarkets />;
  };

  const AbujaMarket = () => {
    const [activeIndex, setactiveIndex] = useState(null);
    const handleClick = (id) => {
      console.log(id);
      setactiveIndex(id);
    };
  
    const AbujaMarkets = memo(function AbujaMarkets(){
      const marts = [
        {id: 0, name: "All"},
        { id: 1, name: "Garki Market" },
        { id: 2, name: "Fish Market" },
        { id: 3, name: "Kabusa MainMart" },
        // { id: 3, name: "Computer Village" },
        // { id: 4, name: "Aswani Market" },
        // { id: 5, name: "Balogun" },
      ];
      return marts.map((chip, id) => (
        <Chip
          sx={{
            "&.MuiChip-clickable": {
              color: chip.id === activeIndex ? "rgb(109, 14, 198)" : "inherit",
              backgroundColor:
                chip.id === activeIndex ? "rgb(211, 191, 230)" : "#f7f7f7",
            },
          }}
          onClick={() => handleClick(chip.id)}
          key={chip.id || id}
          label={chip.name}
          clickable
        />
      ));
    }, []);
    return <AbujaMarkets />;
  };

   const AnambraMarket = () => {
    const [activeIndex, setactiveIndex] = useState(null);
    const handleClick = (id) => {
      console.log(id);
      setactiveIndex(id);
    };

  const AnambraMarkets = memo(function AnambraMarkets(){
    const marts = [
      {id: 0, name: "All"},
      { id: 1, name: "Onitsha MainMart" },
      { id: 2, name: "Ogigi Building Material" },
      { id: 3, name: "Int Electronics Mart" },
      { id: 4, name: "Eke Awka MainMart" },
      { id: 5, name: "Nkwo Nnewi" },
      { id: 6, name: "Balogun" },
    ];
    return marts.map((chip, id) => (
      <Chip
        sx={{
          "&.MuiChip-clickable": {
            color: chip.id === activeIndex ? "rgb(109, 14, 198)" : "inherit",
            backgroundColor:
              chip.id === activeIndex ? "rgb(211, 191, 230)" : "#f7f7f7",
          },
        }}
        onClick={() => handleClick(chip.id)}
        key={chip.id || id}
        label={chip.name}
        clickable
      />
    ));
  }, []);
  return <AnambraMarkets />;
};

export {AbaMarket, AbujaMarket, AnambraMarket, LagosMarkets};