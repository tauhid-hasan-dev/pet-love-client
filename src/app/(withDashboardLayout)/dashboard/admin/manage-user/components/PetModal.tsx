import TSNFileUploader from "@/components/Forms/TSNFileUploader";
import TSNForm from "@/components/Forms/TSNForm";
import TSNInput from "@/components/Forms/TSNInput";
import TSNModal from "@/components/Shared/TSNModal/TSNModal";
import { registerUser } from "@/services/actions/registerUser";
import { uploadImage } from "@/utils/uploadImage";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PetModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      // Create a plain JavaScript object to hold the data
      const adminData: any = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      // If file is present, upload it and add its URL to adminData
      if (values.file) {
        const profilePhoto = await uploadImage(values.file);
        adminData.profilePhoto = profilePhoto;
      }

      // Pass only the plain JavaScript object to registerUser function
      const res = await registerUser(adminData);
      console.log({ res });
      if (res?.data?.id) {
        toast.success("Admin Created Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <TSNModal open={open} setOpen={setOpen} title="Create a admin">
      <TSNForm onSubmit={handleFormSubmit}>
        <Grid container direction="column" spacing={2} mb={1}>
          <Grid item md={12}>
            <TSNInput label="Name" type="name" fullWidth={true} name="name" />
          </Grid>
          <Grid item md={6}>
            <TSNInput
              label="Email"
              type="email"
              fullWidth={true}
              name="email"
            />
          </Grid>
          <Grid item md={6}>
            <TSNInput
              label="Password"
              type="password"
              fullWidth={true}
              name="password"
            />
          </Grid>
          <Grid item md={6}>
            <TSNFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Submit
        </Button>
      </TSNForm>
    </TSNModal>
  );
};

export default PetModal;
