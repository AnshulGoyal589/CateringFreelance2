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
    <div className='bg-[#ecece2]'>
      <section>
        <WhatWeDo/>
      </section>
      {/* <section className='w-[100vw] bg-[#ecece2]'>
        <Band/>
      </section> */}
      <section className='lg:min-h-fit bg-[#ecece2]'>
        <Video/>
      </section>
      {/* <section className="py-10 sm:py-12 lg:py-16 bg-[#ecece2]">
        <MeetOurTeam />
      </section> */}
      <section className='min-w-full bg-[#ecece2]'>
        <Features/>
      </section>

      
    </div>
  )
}
export default index
