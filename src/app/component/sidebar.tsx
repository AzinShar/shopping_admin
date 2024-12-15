"use client";

type sidebarType = {
    current: "orders" | "dashboard" | "costumer" | "inventory" | "conversation" | "settings"
}
export default function Sidebar(props: sidebarType) {
    return (
        <>
            <aside id="logo-sidebar" className="flex flex-col justify-between w-1/6 h-full overflow-y-auto h-full z-40 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className=" px-3 py-4  bg-white pl-2 ">
                    <a className="flex flex-col items-center size-20 space-y-10">
                        <img src="/img/Logo.png" className="flex flex-col size-20 space-y-10" alt="Flowbite Logo" />
                    </a>
                    

                    <div className="space-y-2 font-medium">

                        <div className="text-[#53545C] font-inter">
                            <a href="/dashboard">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'dashboard' ? "bg-primary  text-white py-3" : "hover:bg-red"}`}>
                                <img src={props.current === 'dashboard' ? '/img/Category.png' : '/img/Category-active.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Dashboard</span>   
                            </div>
                            </a>
                        </div>


                        <div>
                        <a href="/orders">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'orders' ? "bg-primary text-white py-3" : ""}`}>
                                <img src={props.current === 'orders' ? '/img/Bag-active.png' : '/img/Bag.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Orders</span>
                                <span className="flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black-800 bg-[#FFCAD4] rounded-full">3</span>
                            </div>
                        </a>
                        </div>
                        <div>
                           
                        <a href="/costumer">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'costumer' ? "bg-primary text-white py-3" : ""}`}>
                                <img src={props.current === 'costumer' ? '/img/TwoUser_active.png' : '/img/TwoUser.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Costumer</span>
                            </div>
                        </a>
                        </div>
                        <div>
                        <a href="/inventory">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'inventory' ? "bg-primary text-white py-3" : ""}`}>
                                <img src={props.current === 'inventory' ? '/img/Folder_active.png' : '/img/Folder.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Inventory</span>
                            </div>
                        </a>
                        </div>
                        <div>
                        <a href="/conversation">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'conversation' ? "bg-primary text-white py-3" : ""}`}>
                                <img src={props.current === 'conversation' ? '/img/Chat_active.png' : '/img/Chat.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Conversation</span>
                                <span className="flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black-800 bg-[#FFCAD4] rounded-full">3</span>
                            </div>
                        </a>
                        </div>
                        <div>
                        <a href="/settings">
                            <div className={`flex flex-row items-center pl-4 my-5 rounded-md  ${props.current === 'settings' ? "bg-primary text-white py-3" : ""}`}>
                                <img src={props.current === 'settings' ? '/img/Setting_active.png' : '/img/Setting.png'} className="flex size-6"></img>
                                <span className="flex ms-3 whitespace-nowrap ">Settings</span>
                            </div>
                        </a>
                        </div>
                    </div>

                </div>

            <div className="flex flex-col mt-auto bottom-0 pt-3 ms-3">
                <div>
                    <div className="flex flex-row items-center bg-[#5E63661A]  rounded-md px-3 py-3 text-black font-inter">
                        <img src="/img/fi_headphones.png" className="flex size-5 ">
                        </img>
                        <span className="ms-3">Contact Support</span>
                    </div>
                </div>


                <div>
                    <div className=" items-center bg-[#FFCC9133] text-black  rounded-md px-3 py-6 text-black font-inter my-4">

                        <div className="flex flex-row">
                            <img src="/img/fi_gift.png" className="flex size-5 " />
                            <span className="ms-3 text-s">Free Gift Awaits You!</span>
                        </div>
                        <div className="flex flex-row items-center space-x-4 ms-3 pt-3">
                            <span className=" text-xs">Upgrade your account</span>
                            <img src="/img/fi_chevron-down.png" className="flex size-3 " />
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center pl-4 mb-5 pt-3">
                        <img src="/img/Logout.png" className="flex size-7"></img>
                        <span className="flex-1 ms-3 whitespace-nowrap text-[#CC5F5F] ">Logout</span>
                    </div>
                </div>


            </div>


        </aside >
        </>
    )

}
