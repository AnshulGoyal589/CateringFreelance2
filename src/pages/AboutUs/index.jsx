import {useEffect} from 'react'
import WhatWeDo from './WhatWeDo'
import Band from './Band'
import Video from './Video'
import MeetOurTeam from './MeetOurTeam'
import Features from './Features'

const index = (props) => {
  useEffect(()=>{
    props.setPreview("About Us");
},[])
  return (
    <div>
      <section>
        <WhatWeDo/>
      </section>
      <section className='w-[100vw]'>
        <Band/>
      </section>
      <section className='lg:min-h-fit'>
        <Video/>
      </section>
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <MeetOurTeam />
      </section>
      <section className='min-w-full'>
        <Features/>
      </section>

      
    </div>
  )
}

export default index
