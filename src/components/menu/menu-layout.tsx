import {FC, PropsWithChildren} from "react";
import {MenuSidebar} from "./menu-sidebar.tsx";

interface Props {
    width?: string;
}

export const MenuLayout: FC<PropsWithChildren<Props>> =
    function ({ children, width = "w-full" }) {

        return (
            <div className="flex w-[100vw] h-[100vh]">
                <MenuSidebar />
                <div className={`${width}`}>
                    {children}
                </div>
            </div>
        )
    }