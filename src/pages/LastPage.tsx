

const LastPage = () => {
  return (
    <div className='grid grid-cols-[5%,95%]'>
        <div className=''></div>

        <div style={{backgroundColor:'#D7CFC5'}} className='h-[140vh] flex flex-col items-center justify-center gap-5 pt-26'>
            
            <div className='text-4xl text-center font-light'>
                Immerce Yourself in a Distinctive Experience,<br></br> Book an Appointment
            </div>

            <div className='grid grid-rows-2 gap-24 mt-20'>

            <div className='grid grid-cols-3 gap-10 row-span-1 font-light'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='border-black border-b outline-none w-60' style={{backgroundColor:'#D7CFC5'}}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Email</label>
                    <input type="text" className='border-black border-b outline-none w-60' style={{backgroundColor:'#D7CFC5'}}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Phone</label>
                    <input type="text" className='border-black border-b outline-none w-60' style={{backgroundColor:'#D7CFC5'}}/>
                </div>
            </div>

            <div className='flex flex-col gap-14 font-light'>
                    <label htmlFor="name">Message</label>
                    <input type="text" className='border-black border-b outline-none w-full' style={{backgroundColor:'#D7CFC5'}}/>
                </div>

            </div>

            <div className='flex flex-col mt-24 gap-6 font-light'>
                
                <div className='text-3xl font-bold text-center'>
                    Address
                </div>

                <div className='text-center text-lg'>
                100 JT Peterson street, London, UK, SW1A 5LY.<br></br>
                Phone: +44 207 874 5555, Email: info@dummytext.com
                </div>

                <div className='text-center pt-8'>
                    ©2024 company. All rights reserved
                </div>
            </div>

        </div>
    </div>
  )
}

export default LastPage