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
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
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
        <div className='align-middle relative m-16 h-5/6'>
          <img src="https://i0.wp.com/s3.us-west-1.amazonaws.com/wp-thecripplegate.com/wp-content/uploads/2011/08/09094117/silhoete-preacher-e1312840985735.jpg?ssl=1" alt="" className='h-full' />
        </div>
        <div className='flex-wrap w-2/4 align-middle relative top-60 font- text-2xl'>
          <a className='font-sans'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </a>
        </div>
      </div>
      <div className='bg-gray-900 w-full h-full'>
        <h1 className=' text-white static'>hello</h1>
      </div>
    </div>
        </>
      );
}