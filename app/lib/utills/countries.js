
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
    const [refs, setref] = useState('country')
    const [location, setLocation] = useState([])
    const delimiter = ", ";
     const [message, setmessage] = useState('chose a country, state, market')
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
        
          let size = 1;
          let nation = null
          console.log(e?.target?.selectedOptions[0].innerText)
          if(e?.target?.selectedOptions?.length > 0){
            // size = e?.target?.selectedOptions.length
            
            for (let i=0; i < size ; i++ ){
              console.log(e?.target?.selectedOptions[0].dataset)
              if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'country'){

               nation =  locations.filter(({country})=> 
                country === e?.target?.selectedOptions[0].innerText )
              
              if(Array.isArray(nation) && nation?.length > 0 ){
                ref.current = e?.target?.selectedOptions[0].innerText
                setref('country')
                  console.log(ref.current)
              
              setval(e?.target.selectedOptions[0].innerText)
              setcont(()=>nation[0].state)
              setmessage('chose a state')
              // setLocation((prev)=>prev.push(e?.target?.selectedOptions[0].innerText))
              e.target.scrollTo({top: 0, behavior: 'smooth'})
            }
              
          break;
         } 
    
         if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'state'){
          nation =  con.filter(({name})=> 
                 name === e?.target?.selectedOptions[0].innerText )
            console.log(Array.isArray(nation[0].markets))
            if(Array.isArray(nation) && nation?.length > 0 ){
              // ref.current = 'state'
              setref('state')
              setval(e?.target.selectedOptions[0].innerText)
              // ref.current = e?.target?.selectedOptions[0].innerText
              setcont(nation[0].markets)
              setmessage('chose a market')
              e.target.scrollTo({top: 0, behavior: 'smooth'})
          }
          break;
        }

        if(i === 0 && e?.target?.selectedOptions[0].dataset.location === 'market'){
          nation =  con.filter(({market})=> 
                 market === e?.target?.selectedOptions[0].innerText )
            console.log(Array.isArray(nation[0]))
            if(Array.isArray(nation) && nation?.length > 0 ){
              // ref.current = 'market'
              setref('market')
              setval(e?.target.selectedOptions[0].innerText)
              // ref.current = e?.target?.selectedOptions[0].innerText
              setmessage((prev)=>prev)
              setcont((prev)=>prev)
              //e.target.scrollTo({top: 0, behavior: 'smooth'})
          }
          break;
        }
       
      }
      
    }
    else {
      
    } 
        },[con])

   
    useEffect(() => {
      document?.getElementById('location').addEventListener('change', (e)=>{
        const selected = e.target.options[e.target.selectedIndex]
        console.log(selected)
      })
    if(val){
    const parent =  document?.getElementById('loc')
    const newMode = document.createElement('Li')
    newMode.setAttribute('value', refs)
    newMode.setAttribute('data-from', ref.current)
    const text = document.createTextNode(val)
    // newMode.appendChild(text)
    newMode.innerHTML = `<span id = ${refs}>${val} <i data-curr= ${refs} class="fa fa-close"></i></span>`
    newMode.style.borderRadius = '9999px'
       newMode.style.padding = '10px 16px'
      newMode.style.backgroundColor='#6A0DAD'
      newMode.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.1)'
      parent.appendChild(newMode)
     newMode.addEventListener('click', (e)=> {
        e.stopPropagation()
        console.log(newMode.parentNode.children.length)
      if(e.target.id === 'country'){
        console.log(newMode.getAttribute('data-from'))
        newMode.parentNode.childNodes.forEach(element => {
        return element.remove()
        });
        // newMode.remove()
        setcont(locations.map(({country})=> country))
        setmessage('chose a country, state, market')
      }
      if(e.target.id === 'state'){
    
        newMode.remove()
      
       let newfile =  locations.filter(({country})=> country === newMode.getAttribute('data-from') )
        
        setcont(newfile[0].state)

        setmessage('chose a country, state, market')
      }
      if(e.target.id === 'market'){
        newMode.remove()
        setcont((prev)=>prev)
      }
      })

      
    // newMode.style.display = 'absolute'
    // newMode.style.outline = '1px solid #F5F5F5'
      
      // '#F5F5F5'
    // newMode.style.position = 'absolute'
      
     
    }
    
     console.log(location) 
    
    
    handle();
    }, [val])

    useEffect(()=>{
     setcont(locations.map(({state, country}, id)=> country))
    },[])
    
    return (
        <div className='flex flex-col space-y-4 mx-auto w-[99%]'>
        
      <section className='flex flex-col justify-start  space-y-4  w-[99%]  m-1'>
       <label>choose location</label>
       
       <ul id='loc' className='flex space-x-2 mb-8 overflow-x-scroll text-[12px] max-w-[99%] pl-1 text-nowrap m-1  text_shadow2' ></ul>
       
        <select onInput={handle} onBeforeInput={()=>console.log(';;;')}   id='location' name='location' enterKeyHint = 'done' required  className=' p-4 shadow flex w-[97%]'>
        {<option disabled >{message}</option>}
        {<option defaultChecked></option>}
      { con?.map((obj, id)=> <option   value={ obj.hasOwnProperty('name') ?  obj.name : obj.hasOwnProperty('market')? obj.market : obj} data-location ={ obj.hasOwnProperty('name') ? 'state' : obj.hasOwnProperty('market') ? 'market' : 'country'} key={id}  className='w-fit text-sm'>
               
                {obj.hasOwnProperty('name') ?  obj.name : obj.hasOwnProperty('market') ? obj.market : obj}
            </option>)
      }
        </select>
        </section>
      
      </div>
    )
  }
  
  export default Countries
  