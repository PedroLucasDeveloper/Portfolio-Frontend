import ProjectImg from '../assets/supermercado.png';

const Project = () =>{
    return(
        <>
            <div className='bg-red-800 m-20 max-w-full'> 
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10'>Projetos</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-red-500 font-semibold'>
                                        Supermercado System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={ProjectImg} alt="Projeto 01" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-red-500 font-semibold'>
                                        Supermercado System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={ProjectImg} alt="Projeto 01" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-red-500 font-semibold'>
                                        Supermercado System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={ProjectImg} alt="Projeto 01" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-red-500 font-semibold'>
                                        Supermercado System
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={ProjectImg} alt="Projeto 01" width={150} height={150}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 gap-4 p-5'></div>
                </div>
            </div>
        </>
    );
}

export default Project;