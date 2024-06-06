"use client"
import { ArrowBack } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductBack = () => {
    const router = useRouter()
  return (
    <div onClick={()=>router.back()}>
            <ArrowBack />
          </div>
  )
}

export default ProductBack
