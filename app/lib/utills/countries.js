"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { locations } from "./allstates";

const Countries = () => {
  const [con, setcont] = useState([]);
  const [val, setval] = useState("");
  const [refs, setref] = useState("country");
  const [message, setmessage] = useState("chose a country, state, market");
  const ref = useRef(null);
  
const data = new FormData()

  const handle = useCallback(
    (e) => {
      if (!e?.target?.selectedOptions?.length) return; // Early return if no options selected

      const selectedOption = e.target.selectedOptions[0];
      const locationType = selectedOption.dataset.location;

      let nation;
      switch (locationType) {
        case "country":
          nation = locations.filter(
            ({ country }) => country === selectedOption.innerText
          );
          if (Array.isArray(nation) && nation.length > 0) {
            ref.current = selectedOption.innerText;
            setref("country");
            setval(selectedOption.innerText);
            setcont(() => nation[0].state);
            setmessage("chose a state");
            e.target.scrollTo({ top: 0, behavior: "smooth" });
          }
          break;
        case "state":
          nation = con.filter(({ name }) => name === selectedOption.innerText);
          if (Array.isArray(nation) && nation.length > 0 && document.getElementById('loc').childElementCount <= 2) {
            setref("state");
            setval(selectedOption.innerText);
            setcont(nation[0].markets); 
            setmessage("chose a market");
            e.target.scrollTo({ top: 0, behavior: "smooth" });
          }
          break;
        case "market":
          nation = con.filter(
            ({ market }) => market === selectedOption.innerText
          );
          if (Array.isArray(nation) && nation.length > 0) {
            setref("market");
            setval(selectedOption.innerText);
            
            const mainBox = document.getElementById("location")
           
            // if(message !== " ")
            //   setmessage(message.replace(/, \S*$/, ''));
            if(document.getElementById('loc').childElementCount <= 2) 
              setmessage('');
            else {
              
              // setmessage(message.replace(/, \S*$/, ''))
              
            }
            mainBox.blur();
            setcont((prev) => prev); // No change for market selection
            
          }
          break;
        default:
        // Handle unexpected location type (optional)
      }
      // console.log(document.getElementById('loc').childNodes.forEach((node)=>console.log(node)))
      e.target.selectedIndex = 0;
    },
    [con, ref, setcont, setmessage, setref, setval] // Update dependencies
  );

  useEffect(() => {
    const locationSelect = document?.getElementById("location");

    if (!locationSelect) return; // Early return if element not found

    const parent = document.getElementById("loc");

    const handleLocationChange = (e) => {
      const selected = e.target.options[e.target.selectedIndex];
      

      if (val && parent.childElementCount < 3) {
        const newMode = document.createElement("li");
        newMode.value = refs;
        newMode.dataset.from = ref.current;
        newMode.innerHTML = `<span id="${refs}"> ${val}  <i data-curr="${refs}" class="fa fa-close"></i></span>`;

        newMode.style.borderRadius = "9999px";

        newMode.style.padding = "10px 16px";
        newMode.style.backgroundColor = "#6A0DAD";
        // newMode.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.1)';

        parent.appendChild(newMode);

        newMode.addEventListener("click", (e) => {
          e.stopPropagation();
          if (e.target.id === "country") {
            
            newMode.parentElement.innerHTML = "";
            setcont(locations.map(({ country }) => country));
            setmessage("chose a country, state, market");
          } else if (e.target.id === "state") {
            newMode.nextElementSibling?.remove(); // Optional chaining for safety
            newMode.remove();
            const filteredLocations = locations.filter(
              ({ country }) => country === newMode.dataset.from
            );
            setcont(filteredLocations[0]?.state || []); // Set to empty array if no state found
            setmessage("chose a state");
          } else if (e.target.id === "market") {
            newMode.remove();
            setcont((prev) => prev); // No change for market selection
            // if(parent.childElementCount === 3){
            //   setmessage((prev)=>prev.replace(/, \S*$/, ''))
            // }
            setmessage('choose a market');
          }
        });
        if(parent.childNodes.length === 3)
        parent.childNodes.forEach((node, i)=>  setmessage((prev)=>prev.concat(i !== 0 ?`,${node.textContent}` : node.textContent).trim()))
        
      } 
      else {
        document.getElementById(
          "market"
        ).innerHTML = `<span id="${refs}"> ${val}  <i data-curr="${refs}" class="fa fa-close"></i></span>`;
        locationSelect.blur();
        // console.log(message.replace(/,(.*)$/, `,${val}`))
        setmessage((prev)=>prev.replace(/^([^,]*,[^,]*,)(.*)$/, `$1` + ` ${val}`))
        // /\s\w+$/, ` ${val}`))
        console.log(message)
      }
     
    };

    locationSelect.addEventListener("change", handleLocationChange);

    // Cleanup function (optional)
    return () => {
      locationSelect?.removeEventListener("change", handleLocationChange);
    };
  }, [val, refs]);

  useEffect(() => {
    document.getElementById("location").selectedIndex = 0;
    setcont(locations.map(({ country }) => country));
    
  }, []);
  
  return (
    <div className="flex flex-col space-y-4 ">
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor="location"
      >
        Choose store location {<p className="text-red-700 inline"> *</p>}
      </label>

      <ul
        id="loc"
        className=" z-50 flex space-x-2 mb-8 overflow-x-scroll text-sm max-w-[99%] py-2 pl-1 text-nowrap m-1  text_shadow2"
      ></ul>
      
      <select
        onInput={handle}
        id="location"
        name="location"
        value={''}
        enterKeyHint="done"
        required
        className=" p-4 shadow flex  text-gray-900  border-l-2 border-[#730fbb] rounded-md"
      >
        <option
          id='selectedVal'
          className="block tex-sm "
          defaultValue={""}
        >
          {message}
        </option>
        {con?.map((obj, id) => (
          <option
            value={
              obj.hasOwnProperty("name")
                ? obj.name
                : obj.hasOwnProperty("market")
                ? obj.market
                : obj
            }
            data-location={
              obj.hasOwnProperty("name")
                ? "state"
                : obj.hasOwnProperty("market")
                ? "market"
                : "country"
            }
            key={id}
            className="w-fit text-sm"
          >
            {obj.hasOwnProperty("name")
              ? obj.name
              : obj.hasOwnProperty("market")
              ? obj.market
              : obj}
          </option>
        ))}
      </select>
     
    
      
    </div>
  );
};

export default Countries;
