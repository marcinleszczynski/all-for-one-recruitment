import {FC} from "react";
import {ReportUpdateForm} from "../components/report-update-form.tsx";
import {toDateString} from "../utils/date-utils.ts";
import {useNavigate} from "react-router";

export const CreateReportPage: FC =
    function () {

        const navigate = useNavigate();

        const onCreateReport = () => {
            navigate("/");
        }

        return (
            <>
                <div className="flex flex-col gap-3 mt-8 mb-8 ml-2">
                    <div className="text-3xl font-bold">Create weather report</div>
                    <div className="text-gray-400">Enter city, temperature, unit and date for your report</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[70%] h-[70%] bg-gradient-to-b from-[#666666] to-[#999999] p-3 rounded-2xl">
                        <ReportUpdateForm report={{city: "", temperature: 273, unit: 'K', date: toDateString(new Date())}} onEnd={onCreateReport} />
                    </div>
                </div>
            </>
        )
    }