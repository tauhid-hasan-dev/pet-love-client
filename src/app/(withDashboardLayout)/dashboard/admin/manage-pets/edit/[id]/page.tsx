"use client";

import TSNForm from "@/components/Forms/TSNForm";
import TSNInput from "@/components/Forms/TSNInput";
import { useEditPetMutation, useGetPetQuery } from "@/redux/api/petApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const PetEditPage = ({ params }: TParams) => {
  //   console.log(params?.doctorId);
  const router = useRouter();

  const id = params?.doctorId;
  console.log(id);

  const { data, isLoading } = useGetPetQuery(id);
  const [editPet] = useEditPetMutation();
  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    data.age = Number(values.age);
    values.id = id;
    // console.log({ id: values.id, body: values });

    try {
      const res = await editPet({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Pet Updated Successfully!!!");
        router.push("/dashboard/admin/pets");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <TSNForm
          onSubmit={handleFormSubmit}
          defaultValues={data && defaultValues}
        >
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="species"
                label="Type"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="breed"
                label="Breed"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="age"
                label="Age"
                type="number"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="size"
                label="Size"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="location"
                label="Location"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="description"
                label="Description"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="temperament"
                label="Temperament"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="medicalHistory"
                label="Health Status"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <TSNInput
                name="adoptionRequirements"
                label="Requirements"
                fullWidth={true}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
          </Grid>

          <Button type="submit">Update</Button>
        </TSNForm>
      )}
    </Box>
  );
};

export default PetEditPage;
