import React from 'react'
import './Features.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import FeatureCard from './FeatureCard';
export default function Features() {
const [dataFeature,setDataFeature]=useState([
  {id:1,title:'Rave', Mony:2_21, Rate:-11.12,
   RateIcon:<ArrowDownwardIcon className='featuresIcon negative'/>
  , Sub:'Compared last month'},
  {id:2,title:'members', Mony:1_541, Rate:-13.2,
   RateIcon:<ArrowDownwardIcon className='featuresIcon negative'/>
  , Sub:'Compared last month'},
  {id:3,title:'courses', Mony:5_867, Rate:+1.1,
   RateIcon:<ArrowUpwardIcon className='featuresIcon '/>
  , Sub:'Compared last month'}
])
  return (
    <>
    <section className="features">
     {dataFeature.map((data)=>
      <FeatureCard key={data.id} {...data} />
     )}
    </section>
    </>
  )
}
