
import Container from '../components/Container'
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const IntroPage = () => {
  return (
    <div className='grid grid-cols-[5%,95%]'>
        <div className='flex flex-col items-center h-screen justify-between'>
            <div className='py-6'>
                <HiOutlineMenuAlt4 className='text-3xl'/>
            </div>
            <div className='flex flex-col w-full items-center h-40 justify-around text-2xl text-white' style={{backgroundColor:"#B2B8A1"}}>
                <FaInstagram />
                <FaFacebookF />
            </div>
        </div>
        <div>
        <Container>
            <div className='h-screen font-light' style={{backgroundImage:'url(introImage.jpg)', backgroundPosition:"center", backgroundSize:"100%"}}>
                <div className='flex px-24' style={{background:'linear-gradient(to top, rgba(0, 0, 0, 0), black)'}}>
                <div className='flex items-center py-14 w-1/2 '>
                    <div>
                        <img src="logo.png" alt="" className='w-36 h-28'/>
                    </div>

                </div>
                <div className='flex w-1/2 '>
                        <div className='h-1/2 flex items-center w-full justify-end gap-2 pt-14'>
                        <input type="text" placeholder='CONTACT US' readOnly className='outline-none text-center rounded-full h-10 shadow-xl placeholder-black opacity-50'/>
                        <button  className='p-3 rounded-full text-white shadow-xl' style={{backgroundColor:'#B1B79F'}}><IoSearch/></button>
                        </div>
                </div>
                </div>

                <div className='flex w-full justify-center flex-col items-center h-[72%] mt-[52px] pt-44' style={{background:'linear-gradient(to bottom, rgba(0, 0, 0, 0), black)'}}>
                    <div className='text-white font-bold text-4xl'>Designed to fit you</div>
                    <div className='text-white font-light text-4xl'>Designed to last</div>
                    
                    <div className='w-3/4 flex justify-center h-3/4 mt-12 border-t-2 pb-28'>
                        <button className='flex items-center gap-3 text-white'>Read More <div className='p-6 rounded-full' style={{backgroundColor:'#B1B79F'}}><FaChevronRight/></div></button>
                    </div>
                </div>

            </div>
        </Container>
        </div>
    </div>
  )
}

export default IntroPage