
'use client'

const locations = [
  {
    country: "Nigeria",
    state: [
      {
        name: "Abia",
        markets:  [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
      {
        name: "Lagos",
        markets: [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
      {
        name: "Abuja",
        markets: [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
    ],
  },
  {
    country: "Ghana",
    state: [
      {
        name: "Abia",
        markets: [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
    ],
  },
  {
    country: "Togo",
    state: [
      {
        name: "Abia",
        markets: [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
    ],
  },
  {
    country: "Senegal",
    state: [
      {
        name: "Abia",
        markets: [{market: "alaba"}, {market:"Aswani"}, {market:"Balogun"}, {market:"Tradfare international"}],
      },
    ],
  },
];


  

import { CancelOutlined } from '@mui/icons-material';
  // const nigerianStates = [
  //   "Abia",
  //   "Adamawa",
  //   "Akwa Ibom",
  //   "Anambra",
  //   "Bauchi",
  //   "Bayelsa",
  //   "Benue",
  //   "Borno",
  //   "Cross River",
  //   "Delta",
  //   "Ebonyi",
  //   "Edo",
  //   "Ekiti",
  //   "Enugu",
  //   "Gombe",
  //   "Imo",
  //   "Jigawa",
  //   "Kaduna",
  //   "Kano",
  //   "Katsina",
  //   "Kebbi",
  //   "Kogi",
  //   "Kwara",
  //   "Lagos",
  //   "Nasarawa",
  //   "Niger",
  //   "Ogun",
  //   "Ondo",
  //   "Osun",
  //   "Oyo",
  //   "Plateau",
  //   "Rivers",
  //   "Sokoto",
  //   "Taraba",
  //   "Yobe",
  //   "Zamfara",
  //   "Federal Capital Territory (FCT)"
  // ];
  

  
  
  
  import React, { useCallback, useEffect, useRef, useState } from 'react'
  
  
  const Countries = () => {
    const [state, setstate] = useState([])
    const [con, setcont] = useState([])
    const [val, setval] = useState('')
    // const [attri, setattri] = useState()
    const ref = useRef(null)
    const handleInput = React.useCallback((e)=>
        {
            console.log(e.target)
            const option1 = westAfricanCountries.filter(({name})=> { console.log(name === e?.target?.value); return name === e?.target?.value})
            if(Array.isArray(option1) && option1?.length > 0 ){
                setstate(option1[0].states)
            }
            
        },[])


        const handle = useCallback((e)=>{
          console.log(e)
          let size = 0;
          let nation = null
          console.log(e?.target?.selectedOptions[0].innerText)
          if(e?.target?.selectedOptions?.length > 0){
            size = e?.target?.selectedOptions.length
            for (let i=0; i < size ; i++ ){
              console.log(e?.target?.selectedOptions[0].dataset)
              if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'country'){

              nation =  locations.filter(({country})=> 
                country === e?.target?.selectedOptions[0].innerText )
              console.log(nation[0].state)
              if(Array.isArray(nation) && nation?.length > 0 ){
                ref.current = 'country'
                console.log(ref.current)
              setval(e?.target.selectedOptions[0].innerText)
              setcont(()=>nation[0].state)
              e.target.scrollTo({top: 0, behavior: 'smooth'})
            }
              
          break;
         } 
    
         if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'state'){
          nation =  con.filter(({name})=> 
                 name === e?.target?.selectedOptions[0].innerText )
            console.log(Array.isArray(nation[0].markets))
            if(Array.isArray(nation) && nation?.length > 0 ){
              ref.current = 'state'
              setval(e?.target.selectedOptions[0].innerText)
              
              setcont(nation[0].markets)
              e.target.scrollTo({top: 0, behavior: 'smooth'})
          }
          break;
        }

        if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'market'){
          nation =  con.filter(({market})=> 
                 market === e?.target?.selectedOptions[0].innerText )
            console.log(Array.isArray(nation[0]))
            if(Array.isArray(nation) && nation?.length > 0 ){
              ref.current = 'market'
              setval(e?.target.selectedOptions[0].innerText)
              
              setcont((prev)=>prev)
              //e.target.scrollTo({top: 0, behavior: 'smooth'})
          }
          break;
        }
       
      }
      
    }
    else {
      
    } 
        },[con, val])

    useEffect(() => {
    if(val && ref.current){
    const parent =  document?.getElementById('loc')
    const newMode = document.createElement('Li')
    newMode.setAttribute('value', ref.current)
    const text = document.createTextNode(val)
    // newMode.appendChild(text)
    newMode.innerHTML = `${val} <i class="fa fa-close"></i>`
    // newMode.style.display = 'absolute'
    newMode.style.outline = '1px solid #cccccc'
      newMode.style.borderRadius = '9999px'
      newMode.style.padding = '6px 12px'
      newMode.style.backgroundColor='#ddd'
    // newMode.style.position = 'absolute'
      
     parent.appendChild(newMode)
    }
    
      
    
    if(handle)
    handle();
    }, [val])

    useEffect(()=>{
     setcont(locations.map(({state, country}, id)=> country))
      console.log(con);
    },[])
    
    return (
        <div className='flex flex-col space-y-4 mx-auto w-[99%]'>
        
      <section className='flex flex-col justify-start  space-y-4  w-[99%] overflow-y-clip m-1'>
       <label>choose location</label>
       <ul id='loc' className='flex space-x-2 mb-8 overflow-x-scroll max-w-[99%] pl-1 text-nowrap m-1' onClick={()=>console.log('del')}></ul>
        <select onInput={handle}  multiple size={3} id='location' name='location' enterKeyHint = 'done' required  className=' p-4 shadow flex w-[97%]'>
       <option  disabled>select an option</option>
      { con.map((obj, id)=> <option value={ obj.hasOwnProperty('name') ?  obj.name : obj.hasOwnProperty('market')? obj.market : obj} data-location ={ obj.hasOwnProperty('name') ? 'state' : obj.hasOwnProperty('market') ? 'market' : 'country'} key={id} className='w-fit text-sm'>
                {obj.hasOwnProperty('name') ?  obj.name : obj.hasOwnProperty('market') ? obj.market : obj}
            </option>)
      }
        </select>
        </section>
      
      </div>
    )
  }
  
  export default Countries
  