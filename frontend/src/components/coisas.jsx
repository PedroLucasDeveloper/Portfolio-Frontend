import Kakashi from "../assets/kakashi.png";

const Coisas = () =>{
    return(
        <div className="flex bg-red-800 m-20 ssm:flex-col lg:flex-row">
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={Kakashi} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"/>
                    <div className="min-w-0 py-5 pl-28 pr-5">
                        <div className="text-slate-900 font-medium text-sm sm:text-base truncate">
                            Name Goes Here
                        </div>
                        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate">
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={Kakashi} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"/>
                    <div className="min-w-0 py-5 pl-28 pr-5">
                        <div className="text-slate-900 font-medium text-sm sm:text-base truncate">
                            Name Goes Here
                        </div>
                        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate">
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={Kakashi} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"/>
                    <div className="min-w-0 py-5 pl-28 pr-5">
                        <div className="text-slate-900 font-medium text-sm sm:text-base truncate">
                            Name Goes Here
                        </div>
                        <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate">
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coisas;