import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";

export default function Collide() {
    return( 
    <>
        <div className='mt-28 w-full h-5/6'>
            <div className='w-full h-screen flex bg-cover bg-center' style={{backgroundImage: `url('https://fellowshipbapch.com/wp-content/uploads/2015/05/childrensministries.jpg')`}}>
                <div className='flex-wrap w-full align-middle top-60 left-24 text-2xl'>
                    <h1 className='font-playfair-display text-8xl text-center w-full relative text-black top-72'>
                        Collide
                    </h1>
                    <br/>
                    <h1 className='text-5xl text-center font-playfair-display text-black w-full relative top-80'>
                    "Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven"<br/>
                    Mathew 19:14
                    </h1>
                </div>
            </div>
        </div>
        <div className='bg-white w-full h-screen flex'>
                
                <div className='flex-wrap w-2/4 align-middle relative top-60 left-14 text-2xl'>
                    <h1 className='font-playfair-display text-4xl'>
                        Kids Pastors Cale & Beth Byargeon
                    </h1>
                    <br/>
                    <a className='font-sans'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </a>
                </div>
                <div className='align-middle relative top-16 left-24 h-5/6'>
                    <img src="https://i.pinimg.com/280x280_RS/c2/a9/d9/c2a9d9bbbafd91f3c7c60e372af9a5e6.jpg" alt="" className='h-full' />
                </div>
            </div>
        <div className='bg-gray-900 w-full h-screen flex items-center'>
                <div className='align-middle relative top-16 left-14 h-5/6'>
                    <img src="https://i.pinimg.com/736x/2d/19/08/2d19081f21aead1f5b58bfffb532cf25.jpg" alt="" className='h-full' />
                </div>
                <div className='flex-wrap w-2/4 align-middle relative left-24 text-2xl'>
                    <h1 className='font-playfair-display text-4xl text-white'>
                        Kids Church
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