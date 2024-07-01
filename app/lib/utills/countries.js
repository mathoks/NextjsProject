
'use client'

const westAfricanCountries = [
    { name: "Benin",  },
    { name: "Burkina Faso", icon: ":flag-bf:" },
    { name: "Cabo Verde", icon: ":flag-cv:" },
    { name: "Côte d'Ivoire", icon: ":flag-ci:" },
    { name: "The Gambia", icon: ":flag-gm:" },
    { name: "Ghana", icon: ":flag-gh:" },
    { name: "Guinea", icon: ":flag-gn:" },
    { name: "Guinea-Bissau", icon: ":flag-gw:" },
    { name: "Liberia", icon: ":flag-lr:" },
    { name: "Mali", icon: ":flag-ml:" },
    { name: "Mauritania", icon: ":flag-mr:" },
    { name: "Niger", icon: ":flag-ne:" },
    { name: "Nigeria", states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
        "Federal Capital Territory (FCT)"
      ] },
    { name: "Senegal", icon: ":flag-sn:" },
    { name: "Sierra Leone", icon: ":flag-sl:" },
    { name: "Togo", icon: ":flag-tg:" },
  ];

  const westAfricanCountries3 = [
    { name: "Benin", icon: "🇧🇯" },
    { name: "Burkina Faso", icon: "🇧🇫" },
    { name: "Cabo Verde", icon: "🇨🇻" },
    { name: "Côte d'Ivoire", icon: "🇨🇮" },
    { name: "The Gambia", icon: "🇬🇲" },
    { name: "Ghana", icon: "🇬🇭" },
    { name: "Guinea", icon: "🇬🇳" },
    { name: "Guinea-Bissau", icon: "🇬🇼" },
    { name: "Liberia", icon: "🇱🇷" },
    { name: "Mali", icon: "🇲🇱" },
    { name: "Mauritania", icon: "🇲🇷" },
    { name: "Niger", icon: "🇳🇪" },
    { name: "Nigeria", icon: "🇳🇬" },
    { name: "Senegal", icon: "🇸🇳" },
    { name: "Sierra Leone", icon: "🇸🇱" },
    { name: "Togo", icon: "🇹🇬" },
  ];

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory (FCT)"
  ];
  

  
  
  
  import React, { useEffect, useState } from 'react'
  
  
  const Countries = () => {
    const [state, setstate] = useState([])

    const handleInput = React.useCallback((e)=>
        {
            console.log(e)
            const option1 = westAfricanCountries.filter(({name})=> { console.log(name === e?.target?.value); return name === e?.target?.value})
            if(Array.isArray(option1) && option1?.length > 0 ){
                setstate(option1[0].states)
            }
            console.log(state, e?.target?.value)
        },[])

    // useEffect(() => {
    //  if(handleInput)
    // handleInput();
    // }, [handleInput])
    
    return (
        <div className='flex flex-col space-y-4'>
        <section className='flex flex-col justify-start  space-y-2'>
        <label>Counrty or region</label>
        <select id='country' name='country' onInput={handleInput} autoComplete='country' enterKeyHint='done' required className='w-auto p-4 shadow '>
        <option></option>
        {westAfricanCountries3.map(({name, icon}, id)=>
            <option value={name} key={id} className='w-fit text-sm'>
                {name}
            </option>
        )}

      </select>
      </section>
      <section className='flex flex-col justify-start  space-y-2'>
      <label>State</label>
      <select id='state' name='state' autoComplete='state' enterKeyHint='done' required className='w-auto p-4 shadow '>
        <option></option>
        {state?.length > 0 && state?.map((name, id)=>
            <option value={name} key={id} className='w-fit text-sm'>
                {name}
            </option>
        )}
      </select>
      </section>
      </div>
    )
  }
  
  export default Countries
  