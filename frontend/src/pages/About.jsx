import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";

export default function About() {
    return(
        <>
        <div className='mt-28 w-full h-5/6'>
            <div className='w-full h-screen flex bg-cover bg-center' style={{backgroundImage: `url('https://thethrivecenter.org/wp-content/uploads/2022/06/Blog-Resource-Headers-_1920x1080.jpg')`}}>
                <div className='flex-wrap w-full align-middle top-60 left-24 text-2xl'>
                    <h1 className='font-playfair-display text-8xl text-center w-full relative text-white top-72'>
                        First Assembly of God Vivian
                    </h1>
                    <br/>
                    <h1 className='text-5xl text-center font-playfair-display text-white w-full relative top-80'>
                    "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age."<br/>
                    Mathew 28:19-20
                    </h1>
                </div>
            </div>
            <div className='bg-white w-full h-screen flex'>
                <div className='align-middle relative top-16 left-14 h-5/6'>
                    <img src="https://i0.wp.com/s3.us-west-1.amazonaws.com/wp-thecripplegate.com/wp-content/uploads/2011/08/09094117/silhoete-preacher-e1312840985735.jpg?ssl=1" alt="" className='h-full' />
                </div>
                <div className='flex-wrap w-2/4 align-middle relative top-60 left-24 text-2xl'>
                    <h1 className='font-playfair-display text-4xl'>
                        Senior Pastor Jody Dempsey
                    </h1>
                    <br/>
                    <a className='font-sans'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </a>
                </div>
            </div>
            <div className='bg-gray-900 w-full h-screen justify-evenly p-16'>
                <div className='w-full text-center m-10 relative h-0'>
                    <h1 className='font-playfair-display text-white text-4xl'> Meet our Pastors</h1> 
                </div>
                <div className='flex w-full justify-evenly p-16'>
                <div className='w-96 relative left-0'>          
                    <div className='hover:scale-105 hover:cursor-pointer'>
                        <img 
                            className='h-96' 
                            src='https://childrensministrybasics.com/wp-content/uploads/2021/02/erika-giraud-4EFeD-VTgu4-unsplash-833x540.jpg'
                            alt='collide'
                        />
                        <div className="absolute h-96 w-96 items-end  inset-0 flex">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-28 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl font-serif text-black md:text-4xl lg:text-5xl"
                                >
                                    Cale and Beth Byargeon
                                </Typography>
                            </div>
                        </div>
                </div>
                <div className='relative top-20'>
                    <h1 
                        className='relative justify-items-center italic text-white text-4xl'>
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry"<br/>
                        -Lorem Ipsum
                    </h1>
                </div>
            </div>
            <div className='w-96 relative'>
                <div className='hover:scale-105 hover:cursor-pointer'>
                  <img 
                    className='h-96' 
                    src='https://www.9marks.org/wp-content/uploads/2014/08/worship-millennials-youth-young-people-christians-church.jpg'
                    alt='bible thumpers'
                  />
                <div className="absolute h-96 w-96 items-end inset-0 flex">
                   <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-20 lg:pb-32">
                      <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl font-serif text-black md:text-4xl lg:text-5xl"
                    >
                        Cesar and Peyton Clavijo
                    </Typography>
                    </div>
                </div>
            </div>
            <div className='relative top-20'>
              <h1 
              className='relative justify-items-center italic text-white text-4xl'>
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry"<br/>
              -Lorem Ipsum
              </h1>
            </div>
          </div>
          <div className='w-96 relative'>
            <div className='hover:scale-105 hover:cursor-pointer'>
              <img 
                className='h-96' 
                src='https://www.religiousproductnews.com/wp-content/uploads/sites/3/2021/07/worship-team-1313x600.jpg'
                alt='worship'
              />
              <div className="absolute h-96 w-96 items-end  inset-0 flex">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-28 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="font-serif text-black mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Wesley and Diana Adcock
                  </Typography>
                </div>
              </div> 
            </div>
            <div className='relative top-20'>
              <h1 
              className='relative justify-items-center italic text-white text-4xl'>
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry"<br/>
              -Lorem Ipsum
              </h1>
            </div>
            </div>
          </div>
        </div>
        <div className='flex-wrap h-screen items-center content-evenly'>
        <div className='bg-white w-full h- flex items-center  mb-6'>
          <div className='w-2/5  relative  left-14 text-2xl'>
            <h1 className='font-playfair-display text-6xl text-center'>
              What we Believe
            </h1>
            <br/>
            <p className='text-black font-sans'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className='relative  h-3/4 left-24 w-3/6'>
            <img src="https://i0.wp.com/beautifulinjesus.com/wp-content/uploads/2024/03/Crucified-with-Christ-2.jpg?ssl=1" className='w-full'></img>
            </div>
          </div>
        <div className='bg-white flex justify-center relative top-10'>
          <h1 className='text-3xl w-4/6 text-center font-playfair-display'>
          "I am the resurrection and the life. He who believes in Me, though he may die, he shall live. And whoever lives and believes in Me shall never die."<br/>
            JOHN 11:25-26
          </h1>
        </div>
        </div>
        </div>
        </>
    )
}