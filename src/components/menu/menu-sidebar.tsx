import {FC} from "react";
import {Sidebar, SidebarItemGroup} from "flowbite-react";
import allForOneLogo from "../../assets/all-for-one-logo.svg";
import allWeather from "../../assets/all-weather.svg";
import createReportBlack from "../../assets/create-report-black.svg";
import {useLocation} from "react-router";

export const MenuSidebar: FC =
    function () {

        const location = useLocation();
        const activeStyle = "bg-gradient-to-l from-[#FFFFFFF0] to-[#FFFFFF00]"

        return (
            <>
                <Sidebar>
                    <Sidebar.Items>
                        <SidebarItemGroup>
                            <img src={allForOneLogo} className="w-[180px] h-[60px] px-2 mb-5" alt="all-for-one-logo"/>
                            <Sidebar.Item href="/" className={location.pathname === "/" ? activeStyle : ""}>
                                <div className="flex gap-3">
                                    <img src={allWeather} className="w-6 h-6" alt="all-weather" />
                                    Weather Reports
                                </div>
                            </Sidebar.Item>
                            <Sidebar.Item href="/create" className={location.pathname === "/create" ? activeStyle : ""}>
                                <div className="flex gap-3">
                                    <img src={createReportBlack} className="w-6 h-6" alt="create-weather" />
                                    Create Report
                                </div>
                            </Sidebar.Item>
                        </SidebarItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </>
        )
    }