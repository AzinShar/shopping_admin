import Header from "../component/header";
import Sidebar from "../component/sidebar";

export default function Dashboard() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar current="dashboard"/>
                <div className="felx-col w-full overflow-y-scroll">
                    <Header current="dashboard"/>
                </div>

            </div>
        </>
    )
}