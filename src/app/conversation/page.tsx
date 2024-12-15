import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Conversation() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="conversation"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="conversation"/>
                </div>

            </div>
        </>
    )
}