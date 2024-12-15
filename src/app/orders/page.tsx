import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Orders() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="orders"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="orders"/>
                </div>

            </div>
        </>
    )
}