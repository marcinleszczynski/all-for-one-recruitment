import {createReport, deleteReport, IReport, updateSingleReport} from "../api/main-be-client.ts";
import {FC, useState} from "react";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {Button, Datepicker, Label, Select, TextInput} from "flowbite-react";
import {LoadingButtonWrapper} from "./loading-button-wrapper.tsx";
import {useMutation} from "@tanstack/react-query";
import {toDateString} from "../utils/date-utils.ts";

interface Props {
    report: IReport;
    onEnd: () => void;
}

export const ReportUpdateForm: FC<Props> =
    function({ report, onEnd }) {

        const [errorMessage, setErrorMessage] = useState<string>("")

        const methods = useForm<IReport>({
            mode: "onChange",
            defaultValues: report
        });

        const { control, watch, handleSubmit, formState: {isValid, errors}} = methods;

        const onSubmit = () => {
            if (!isValid) {
                return;
            }
            setErrorMessage("");

            if (report.id) {
                reportUpdateMutation.mutate();
            } else {
                reportCreateMutation.mutate();
            }
        }

        const city = watch("city", report.city);
        const temperature = watch("temperature", report.temperature);
        const unit = watch("unit", report.unit);
        const date = watch("date", report.date);

        const reportUpdateMutation = useMutation({
            mutationFn: () => {
                return updateSingleReport(report.id ?? "", { city, temperature, unit, date: toDateString(new Date(date))})
            },
            onSuccess: () => {
                onEnd();
            },
            onError: (res) => {
                setErrorMessage(res.message)
            }
        });

        const reportCreateMutation = useMutation({
            mutationFn: () => {
                return createReport({ city, temperature, unit, date: toDateString(new Date(date))})
            },
            onSuccess: () => {
                onEnd();
            },
            onError: (res) => {
                setErrorMessage(res.message)
            }
        });

        const reportDeleteMutation = useMutation({
            mutationFn: () => {
                return deleteReport(report.id ?? "");
            },
            onSuccess: () => {
                onEnd();
            },
            onError: (res) => {
                setErrorMessage(res.message)
            }
        });

        const handleDeleteMutation = () => {
            setErrorMessage("");
            reportDeleteMutation.mutate();
        }

        return (
            <>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col justify-between gap-8 !min-h-[80vh]">
                            <div className="flex flex-col gap-3">
                                <div>
                                    <Label htmlFor="city">City:</Label>
                                    <Controller
                                        name="city"
                                        control={control}
                                        rules={{
                                            required: "This field is required"
                                        }}
                                        render={({field}) => (
                                            <TextInput
                                                name="city"
                                                type="text"
                                                value={city}
                                                onChange={(e) => field.onChange(e)}
                                                placeholder="Enter city..."
                                                color={errors.city ? "failure" : "primary"}
                                                helperText={typeof errors.city?.message === "string" ? errors.city?.message : ""}
                                            />
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="temperature">Temperature:</Label>
                                    <Controller
                                        name="temperature"
                                        control={control}
                                        rules={{
                                            required: "This field is required"
                                        }}
                                        render={({field}) => (
                                            <TextInput
                                                name="temperature"
                                                type="number"
                                                value={temperature}
                                                onChange={(e) => field.onChange(e)}
                                                placeholder="Enter temperature..."
                                                color={errors.temperature ? "failure" : "primary"}
                                                helperText={typeof errors.temperature?.message === "string" ? errors.temperature?.message : ""}
                                            />
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="unit">Unit</Label>
                                    <Controller
                                        control={control}
                                        name="unit"
                                        rules={{
                                            required: "This field is required"
                                        }}
                                        render={({field}) => (
                                            <Select
                                                value={unit}
                                                onChange={(e) => field.onChange(e)}
                                                color={errors.unit ? "failure" : "primary"}
                                                helperText={typeof errors.unit?.message === "string" ? errors.unit?.message : ""}
                                            >
                                                <option value="K">K</option>
                                                <option value="F">F</option>
                                                <option value="C">C</option>
                                            </Select>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="date">Date:</Label>
                                    <Controller
                                        control={control}
                                        name="date"
                                        rules={{
                                            required: "This field is required"
                                        }}
                                        render={({field}) => (
                                            <Datepicker
                                                value={date ? new Date(date) : null}
                                                name="date"
                                                onChange={(e) => field.onChange(e)}
                                                color={errors.date ? "failure" : "primary"}
                                                helperText={typeof errors.date?.message === "string" ? errors.date?.message : ""}
                                            />
                                        )}
                                    />
                                </div>
                                { errorMessage && (
                                    <h1 className="text-red-800 bg-white p-1 rounded-xl inline-block font-bold text-xl">
                                        {errorMessage}
                                    </h1>
                                )}
                            </div>
                            <div className="flex justify-between">
                                <LoadingButtonWrapper isLoading={reportDeleteMutation.isPending}>
                                    <Button disabled={!report.id} color="red" onClick={handleDeleteMutation}>Delete</Button>
                                </LoadingButtonWrapper>
                                <LoadingButtonWrapper isLoading={reportUpdateMutation.isPending || reportCreateMutation.isPending}>
                                    <Button color="primary" type="submit" onClick={handleSubmit(onSubmit)} form="update-form">
                                        {report.id ? "Update" : "Create"}
                                    </Button>
                                </LoadingButtonWrapper>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </>
        )
    }