import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfileApi";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DoctorInformation from "./components/DoctorInformation";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const DoctorProfile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});

  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              height={300}
              width={400}
              src={data?.profilePhoto}
              alt="profile photo"
            />
          </Box>
          {updating ? (
            <p>Uploading...</p>
          ) : (
            <AutoFileUploader
              name="file"
              label="Choose Your Profile Photo"
              icon={<CloudUploadIcon />}
              onFileUpload={fileUploadHandler}
              variant="text"
            />
          )}
        </Grid>
        <Grid xs={12} md={8}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfile;
