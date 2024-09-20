import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import HeroPic from '../assets/kakashi.png';

const hero = () =>{
    return(
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>I' m</p>
                <h1 className='text-6xl'>O mais brabo, da tropa</h1>
                <hr />
                <p className='mt-10 text-slate-300 font-sans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque libero blanditiis rem ad est, tempora, voluptatibus assumenda delectus laboriosam aliquid exercitationem nisi earum perferendis. Deleniti consequatur vel aliquam laudantium?
                </p>
            </div>
            <div className='w-1/3 items-center ssm:w-fit'>
                    <img src={HeroPic} alt="" width={250} height={250} className='rounded-full w-full border-8 border-white'/>
            </div>
            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About Me</p>
                <p className='text-slate-300'>
                    Let´s build quality in programming ad design with our services
                </p>
                <button className='bg-white text-red-600 px-10 py-2 my-3 rounded-full hover:bg-red-800 hover:text-white '>
                    Show More...
                </button>

                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsFacebook size={40} className='border-4 hover:border-red-800 rounded-full'/>
                    <BsTwitter size={40} className='border-4 hover:border-red-800 rounded-full'/>
                    <BsInstagram size={40} className='border-4 hover:border-red-800 rounded-full'/>
                    <BsPinterest size={40} className='border-4 hover:border-red-800 rounded-full'/>
                </div>
            </div>
        </section>
    );
}

export default hero;