import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
<section className="relative overflow-hidden py-1 bg-[#b58a60] border border-t-2 border-t-black ">
    <div className="relative z-10 ">
        <div className="m-6 flex flex-col items-center flex-wrap">
                    <div className="inline-flex items-center">
                        <Logo width="100px" />
                    </div>
                    <div className="w-full p-4 flex  items-center justify-evenly">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                    CONTACT US
                    </h3>
                    <p className='mb-4 text-base font-medium text-gray-900 hover:text-gray-700'>
                      Phone :{" "}
                     <span>
                       <a href="tel:+919973992132">
                         9973992132 
                       </a>
                     </span>
                     </p>
                     <p className='mb-4 text-base font-medium text-gray-900 hover:text-gray-700'>Email : 2023ugmm051@nitjsr.ac.in</p> 
                     <p className='mb-4 text-base font-medium text-gray-900 hover:text-gray-700'>Email : adarshroy2010@gmail.com</p> 
                
                </div>
                <div className="h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
                    </div>
                    <div className='text-center p-2'>
                    <div className="w-full pt-10 ">Made with ❤️ by  Adarsh</div>
                    <div className="w-full opacity-45">© 2024 Copyright: memories </div>
                    </div>
        </div>
    </div>
</section>
  )
}

export default Footer