import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Costumer() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="costumer"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="costumer"/>
                </div>

            </div>
        </>
    )
}