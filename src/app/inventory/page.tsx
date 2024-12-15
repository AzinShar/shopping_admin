import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Inventory() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="inventory"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="inventory"/>
                </div>

            </div>
        </>
    )
}