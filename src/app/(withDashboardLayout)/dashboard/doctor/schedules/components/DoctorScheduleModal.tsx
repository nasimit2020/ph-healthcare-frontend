import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { Button, Grid, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, isSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();

    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);

  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  const schedules = data?.schedules;

  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedScheduleIds,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction="column" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              isSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedules}
          selectedScheduleIds={selectedScheduleIds}
          setSelectedScheduleIds={setSelectedScheduleIds}
        />
      </Stack>

      <LoadingButton
        size="small"
        onClick={onSubmit}
        loading={isLoading}
        loadingIndicator="Submitting…"
        variant="contained"
      >
        <span>Submit</span>
      </LoadingButton>
    </PHModal>
  );
};

export default DoctorScheduleModal;
