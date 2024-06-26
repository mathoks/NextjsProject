"use client"
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import React from 'react'


const ProgressBar = ({value}) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
  return (
    
      <BorderLinearProgress  variant="determinate" value={value} sx={{color: '#6A0DAD' }}/>
    
  )
}

export default ProgressBar
