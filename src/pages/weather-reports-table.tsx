import {Modal, Spinner, Table} from "flowbite-react";
import {useQuery} from "@tanstack/react-query";
import {getAllReports, IReport} from "../api/main-be-client.ts";
import {BiPencil} from "react-icons/bi";
import {useEffect, useState} from "react";
import {ReportUpdateForm} from "../components/report-update-form.tsx";
import {mapToKelvin} from "../utils/temperature-utils.ts";

function WeatherReportsTable() {

    const [updateReportModalActive, setUpdateReportModalActive] = useState<boolean>(false);
    const [updatedReport, setUpdatedReport] = useState<IReport | null>(null);
    const [displayedReports, setDisplayedReports] = useState<IReport[]>([]);

    const [sortedAscCity, setSortedAscCity] = useState<boolean>(false);
    const [sortedAscTemperature, setSortedAscTemperature] = useState<boolean>(false);
    const [sortedAscDate, setSortedAscDate] = useState<boolean>(false);

    const reportsQuery = useQuery({
        queryKey: ["allReports"],
        queryFn: () => getAllReports()
    });

    useEffect(() => {
        if (reportsQuery.data?.data) {
            setDisplayedReports(reportsQuery.data?.data);
        } else {
            setDisplayedReports([])
        }
    }, [reportsQuery.data]);

    const onUpdateReport = (report: IReport) => {
        setUpdateReportModalActive(true);
        setUpdatedReport(report);
    }

    const onModalClose = () => {
        setUpdateReportModalActive(false);
        setUpdatedReport(null);
        reportsQuery.refetch();
    }

    const sortByCity = () => {
        const modifier = sortedAscCity ? -1 : 1;
        const sortedElements = [...displayedReports].sort((a, b) => a.city.localeCompare(b.city) * modifier);
        setDisplayedReports(sortedElements);
        setSortedAscCity(!sortedAscCity);
    }

    const sortByTemperature = () => {
        const modifier = sortedAscTemperature ? -1 : 1;
        const sortedElements = [...displayedReports].sort((a, b) => (mapToKelvin(a) - mapToKelvin(b)) * modifier);
        setDisplayedReports(sortedElements);
        setSortedAscTemperature(!sortedAscTemperature);
    }

    const sortByDate = () => {
        const modifier = sortedAscDate ? -1 : 1;
        const sortedElements = [...displayedReports].sort((a, b) => a.date.localeCompare(b.date) * modifier);
        setDisplayedReports(sortedElements);
        setSortedAscDate(!sortedAscDate);
    }

    return (
        <>
            <div className="flex flex-col gap-3 mt-8 mb-8 ml-2">
                <div className="text-3xl font-bold">Weather Reports</div>
                <div className="text-gray-400">See and edit all avaiable weather reports here</div>
            </div>
            <div className="ml-2 mr-2">
                <Table>
                    <Table.Head>
                        <Table.HeadCell className="cursor-pointer" onClick={sortByCity}>City</Table.HeadCell>
                        <Table.HeadCell className="cursor-pointer" onClick={sortByTemperature}>Temperature (K)</Table.HeadCell>
                        <Table.HeadCell className="cursor-pointer" onClick={sortByDate}>Date</Table.HeadCell>
                        <Table.HeadCell>Edit</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {reportsQuery.isLoading && (
                            <Table.Row>
                                <Table.Cell>
                                    <Spinner />
                                </Table.Cell>
                            </Table.Row>
                        )}
                        {reportsQuery.isError && (
                            <Table.Row>
                                Error occured
                            </Table.Row>
                        )}
                        {displayedReports.map((report) => (
                            <Table.Row key={report.id}>
                                <Table.Cell>{report.city}</Table.Cell>
                                <Table.Cell>{mapToKelvin(report)}</Table.Cell>
                                <Table.Cell>{report.date}</Table.Cell>
                                <Table.Cell>
                                    <div
                                        className="transition text-center inline-block border-2 border-[#00000020] hover:bg-[#00000020] px-2 py-1 rounded-3xl cursor-pointer"
                                        onClick={() => onUpdateReport(report)}
                                    >
                                        <BiPencil/>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <Modal onClose={onModalClose} show={updateReportModalActive}>
                <div className="flex w-[95vw] h-[95vh] justify-end items-center">
                    <div className="w-[25vw] h-[90vh] rounded-2xl bg-gradient-to-b from-[#888888] to-[#666666] px-3">
                        <Modal.Header>Editing report details</Modal.Header>
                        <Modal.Body>
                            {updatedReport && (
                                <ReportUpdateForm report={updatedReport} onEnd={onModalClose}/>
                            )}
                        </Modal.Body>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default WeatherReportsTable
