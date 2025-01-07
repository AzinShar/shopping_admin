type headerType = {
    current: "orders" | "dashboard" | "costumer" | "inventory" | "conversation" | "settings"
}
export default function Header(props: headerType) {
    return (
        <>

            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" className="flex items-center">

                            <span className="self-center text-l font-inter whitespace-nowrap dark:text-white capitalize">
                                {props.current}
                            </span>
                        </a>


                        <div className="flex items-center lg:order-2">
                            <div className="flex mr-4">
                                <div className=" items-center flex flex-row items-center space-x-4 ms-3 p-3 w-auto  text-black font-inter bg-[#FFEDF1] rounded-md ">
                                <span className="text-s">Emily profile's  </span>
                                <img src="/img/fi_chevron-downone.png" className="flex size-4" />
                                    
                            </div>
                        </div>
                        
                            <img src="/img/Notification.png" className=" size-6 mr-4"></img>
                            <img src="/img/image_1.png" className="h-10 mx-auto object-cover rounded-2xl w-10" ></img>

                        </div>

                    </div>
                </nav>
            </header>

        </>
    )
}