import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <div className='absolute  mt-28 w-full h-5/6'>        
        <Carousel transition={{ duration: 2 }} autoplay={true} autoplayDelay={6000} loop={true} >
          <div className="relative h-full w-screen">
            <img
              src="https://cf3.gatewaypeople.com/production/fae/image/asset/6441/gatewayworship_webbanner.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Worship
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button variant="outlined" className="rounded-full text-xl font-semibold border-cyan-700 text-cyan-700 hover:text-white hover:bg-cyan-700">
                    EXPLORE
                  </Button>
                  <Button variant="outlined" className="rounded-full text-xl font-semibold border-cyan-700 text-cyan-700 hover:text-white hover:bg-cyan-700">
                    GALLERY
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-screen">
            <img
              src="https://img.texasmonthly.com/2023/07/texas-painted-churches-1.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Service Times
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Sundays: 9am<br></br>
                  Wednesday: 5:30pm
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-screen">
            <img
              src="https://regenbrampton.com/wp-content/uploads/2023/08/How-Does-Volunteering-Help-the-Community_-Hero.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Community
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Vivian is a beautiful community
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
        <div className='bg-white w-full h-screen flex'>
          <div className='align-middle relative top-16 left-14 h-5/6'>
            <img src="https://i0.wp.com/s3.us-west-1.amazonaws.com/wp-thecripplegate.com/wp-content/uploads/2011/08/09094117/silhoete-preacher-e1312840985735.jpg?ssl=1" alt="" className='h-full' />
          </div>
          <div className='flex-wrap w-2/4 align-middle relative top-60 left-24 text-2xl'>
            <h1 className='font-playfair-display text-4xl'>
              WHO ARE WE?
            </h1>
            <br/>
            <a className='font-sans'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </a>
            <br/>
            <div className="flex items-center gap-4 justify-center mt-8">
              <Button variant="outlined" className="rounded-full text-xl font-semibold border-cyan-700 text-cyan-700 hover:text-white hover:bg-cyan-700">
                ABOUT
              </Button>
            </div>
          </div>
        </div>
        <div className='bg-gray-900 w-full h-screen flex justify-evenly p-16'>
          <div className='w-96 relative'>
            <div className='hover:scale-105 hover:cursor-pointer'>
              <img 
                className='h-96' 
                src='https://childrensministrybasics.com/wp-content/uploads/2021/02/erika-giraud-4EFeD-VTgu4-unsplash-833x540.jpg'
                alt='collide'
              />
              <div className="absolute h-96 w-96 items-end bg-black/75 inset-0 flex">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-28 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl font-serif text-white/60 md:text-4xl lg:text-5xl"
                  >
                    Collide
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
              <div className="absolute h-96 w-96 items-end bg-black/75 inset-0 flex">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-20 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl font-serif text-white/60 md:text-4xl lg:text-5xl"
                  >
                    Bible Thumpers
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
              <div className="absolute h-96 w-96 items-end bg-black/75 inset-0 flex">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-28 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="font-serif text-white/60 mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Worship
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
        <div className='bg-white w-full h-full flex items-center'>
          <div className='w-2/5  relative  left-14 text-2xl'>
            <h1 className='font-playfair-display text-4xl'>
              OUR MISSION
            </h1>
            <br/>
            <p className='text-black font-sans'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="flex items-center gap-4 justify-center mt-5 relative">
              <Button variant="outlined" className="rounded-full text-xl font-semibold border-cyan-700 text-cyan-700 hover:text-white hover:bg-cyan-700">
                NEXT STEP
              </Button>
            </div>
          </div>
          <div className='relative  h-3/4 left-24 w-3/6'>
            <img src="https://www.americansteeples.com/images/steeple_history.jpg" className='w-full'></img>
          </div>
        </div>
        <div className='bg-white flex justify-center relative'>
          <h1 className='text-3xl w-4/6 text-center font-playfair-display'>
            'FOR GOD SO LOVED THE WORLD, THAT HE GAVE HIS ONE AND ONLY SON, SO WHOEVER BELIEVES IN HIM SHALL HAVE ETERNAL LIFE AND NOT PERISH'<br/>
            JOHN 3:16
          </h1>
        </div>
      </div>
    </>
  );
}