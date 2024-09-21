import { useState } from 'react';

import { FaCode } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';

const Nav = () =>{

    const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function CloseMenu(){
        setToggle(false);
    }

    return(
        <>
            <div className="bg-black flex items-center justify-between p-10 lg:flex-row">
                <div><a href="" className="text-white font-mono ssm:text-2xl md:text-3xl lg:text-3xl
                tracking-wider flex items-center gap-2"><FaCode size={30}/>PEDRO SANTOS</a>
                </div>
                <div className="space-x-4">
                    <div className='ssm:hidden lg:block space-x-2'>
                        <a href="#" className="text-white hover:bg-teal-800
                        rounded-md px-5 py-2 text-xl">Skills</a>
                        <a href="#" className="text-white hover:bg-teal-800
                        rounded-md px-5 py-2 text-xl">Projetos</a>
                        <a href="#" className="text-white hover:bg-teal-800
                        rounded-md px-5 py-2 text-xl">Coisas</a>
                    </div>
                    <div className='ssm:block lg:hidden'>
                        {toggle ? (
                            <AiOutlineClose onClick={CloseMenu} size={30} className='text-white cursor-pointer'/>
                        ) : (
                            <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className='bg-black ssm:block lg:hidden'>
                {toggle ? (
                    <div className='flex justify-between border-t-2 w-full'>
                        <ul className='w-full'>
                            <li className='text-white text-left text-xl mb-2 cursor-pointer px-5 py-2 transition ease-in-out delay-250 hover:font-bold hover:bg-teal-800 duration-300'>Skills</li>
                            <li className='text-white text-left text-xl mb-2 cursor-pointer px-5 py-2 transition ease-in-out delay-250 hover:font-bold hover:bg-teal-800 duration-300'>Projetos</li>
                            <li className='text-white text-left text-xl mb-2 cursor-pointer px-5 py-2 transition ease-in-out delay-250 hover:font-bold hover:bg-teal-800 duration-300'>Coisas</li>
                        </ul>
                    </div>
                ):(
                    <div></div>
                )}
            </div>
        </>
    );
}

export default Nav;