import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Settings() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="settings"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="settings"/>
                </div>

            </div>
        </>
    )
}