import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";

export default function Youth() {
    return( 
    <>
        <div className='mt-28 w-full h-5/6'>
            <div className='w-full h-screen flex bg-cover bg-center' style={{backgroundImage: `url('https://www.northeastchartertour.com/wp-content/uploads/2015/07/youth-ministry.jpg')`}}>
                <div className='flex-wrap w-full align-middle top-60 left-24 text-2xl'>
                    <h1 className='font-playfair-display text-8xl text-center w-full relative text-white top-72'>
                        Bible Thumpers
                    </h1>
                    <br/>
                    <h1 className='text-5xl text-center font-playfair-display text-white w-full relative top-80'>
                    "Start children off on the way they should go, and even when they are old they will not turn from it."<br/>
                    Proverbs 22:6
                    </h1>
                </div>
            </div>
        </div>
        <div className='bg-white w-full h-screen flex'>
                
                <div className='flex-wrap w-2/4 align-middle relative top-60 left-14 text-2xl'>
                    <h1 className='font-playfair-display text-4xl'>
                        Youth Pastors Cesar & Peyton Clavijo
                    </h1>
                    <br/>
                    <a className='font-sans'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </a>
                </div>
                <div className='align-middle relative top-16 left-24 h-5/6'>
                    <img src="https://sientetrujillo.com/wp-content/uploads/2024/04/Cesar-Clavijo-Arraiza-e1713090976494.jpg" alt="" className='h-full' />
                </div>
            </div>
        <div className='bg-gray-900 w-full h-screen flex'>
                <div className='align-middle relative top-16 left-14 h-5/6'>
                    <img src="https://allsaintsbythesea.org/wp-content/uploads/2016/09/youth-group.jpg" alt="" className='h-full' />
                </div>
                <div className='flex-wrap w-2/4 align-middle relative top-60 left-24 text-2xl'>
                    <h1 className='font-playfair-display text-4xl text-white'>
                        Youth Ministry
                    </h1>
                    <br/>
                    <a className='font-sans text-white'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <br/>
                      Service Times: Wednesdays @ 6:30 pm, Sundays @ 11:30 am
                    </a>
                </div>
            </div>
    </>
)
}