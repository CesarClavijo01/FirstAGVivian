import { Link } from 'react-router-dom'; 
import FirstAGlogo from '../assets/FirstAGlogo.jpg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav className='bg-gray-800 absolute flex items-center w-screen h-28 top-0 left-0'>
            <div className=''>
                <Link to='/'>
                    <img src={FirstAGlogo} alt="logo" className='h-20 w-20 m-4'/>
                </Link>
            </div>
            <div className='absolute right-0 flex-nowrap'>
            <Link className='m-5 font-semibold text-white text-2xl hover:underline'>
                ABOUT
            </Link>
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex  justify-center  bg-transparent px-3 py-2 text-2xl font-semibold text-white hover:underline">
          MINISTRIES
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-sky-500 data-[focus]:text-gray-900"
            >
              Collide
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-sky-500 data-[focus]:text-gray-900"
            >
              Bible Thumpers
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-sky-500 data-[focus]:text-gray-900"
            >
              Worship
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
    <Link className='m-5 font-semibold text-white text-2xl hover:underline'>
                EVENTS
            </Link>
            <Link className='m-5 font-semibold text-white text-2xl hover:underline'>
                NEXT STEP
            </Link>
            <Link className='m-5 font-semibold text-white text-2xl hover:underline'>
                CONTACT
            </Link>
            <Link className='m-5 font-semibold text-white text-2xl hover:underline'>
                GIVE
            </Link>
            </div>
            
        </nav>
        </>
    )
}