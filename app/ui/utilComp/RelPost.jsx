'use client'
import React, { useState, useEffect } from 'react'
import { InView } from "react-intersection-observer";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const RelPost = ({trigger}) => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [loading, setIsLoading] = useState(false)
    const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handlefetch() {
    console.log('hhh')
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('query', page);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  }

  useEffect(() => {
    
    setIsLoading(true)
   const data = ['gg', 'gggju']
   if(data.length > 0){
    setContent(prev=> [prev, ...data])
    setPage(prev=> prev + 1);
    setIsLoading(false)
   
}
else {}
  }, [])
  

  return (
    <div className='h-20 overflow-y-scroll space-x-1' >
    <ul>
    {content.map((fi,id)=>(<li key={id}>{fi}</li>))}
    </ul>
    <InView
     root={null}
        rootMargin={"10px"}
        threshold={0.8}
        className="bg-pink-300"
    >
      {({ inView, ref, entry }) => {
        if (entry && entry?.isIntersecting && inView) {
          handlefetch();
        }
          return <div className='h-10 bg-red-200' ref={ref} ></div>
        
      }}
    </InView>
    </div>
  );
}

export default RelPost
