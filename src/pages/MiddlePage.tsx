import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import ImageCard from '../components/ImageCard';

const MiddlePage = () => {
  return (
    <div className='grid grid-cols-[5%,95%]'>
        <div className=''></div>

        <div style={{backgroundColor:'#E3DED7'}} className='h-[120vh]'>
            <div className='flex justify-between px-24 items-center h-[20%] mt-10'>

                <div className='flex gap-4 items-center'>
                    <button className='px-12 py-2 rounded-full font-light' style={{backgroundColor:'#B1B79F'}}>KITCHEN</button>
                    <button className='px-12 py-2 rounded-full border-2 font-light' style={{borderColor:'#B1B79F'}}>DRESSING</button>
                </div>

                <div className='text-5xl pr-8'>
                    Collections
                </div>

                <div className='flex text-6xl gap-8'>
                <FaArrowLeft/>
                <FaArrowRight />
                </div>

            </div>

            <div className='grid grid-cols-4 grid-rows-2 gap-x-56 gap-y-8 overflow-hidden'>

                
                    <ImageCard backgroundImage='card1Image.jpg' title='Blanc' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card2Image.jpg' title='Steel' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card3Image.jpg' title='Rustique' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card4Image.jpg' title='Steel' category='Kitchen - Classic'/>
                

                
                    <ImageCard backgroundImage='card5Image.jpg' title='Everbloom' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card6Image.jpg' title='Woodland Blue' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card7Image.jpg' title='Blush' category='Kitchen - Classic'/>
                    <ImageCard backgroundImage='card8Image.jpg' title='Woodland Blue' category='Kitchen - Classic'/>
                

            </div>
        
        </div>

    </div>
  )
}

export default MiddlePage