import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import TSNForm from "@/components/Forms/TSNForm";
import TSNInput from "@/components/Forms/TSNInput";

import TSNFullScreenModal from "@/components/Shared/TSNModal/TSNFullScreenModal";
import { useCreatePetMutation } from "@/redux/api/petApi";
import { toast } from "sonner";
import TSNFileUploader from "@/components/Forms/TSNFileUploader";
import { uploadImage } from "@/utils/uploadImage";

// import { toast } from "sonner";
// import TSNSelectField from "@/components/Forms/TSNSelecteField";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PetModal = ({ open, setOpen }: TProps) => {
  const [createPet] = useCreatePetMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const { file, ...data } = values;
    if (file) {
      const photo = await uploadImage(values.file);
      if (!data.photos || !Array.isArray(data.photos)) {
        data.photos = [];
      }
      data.photos.push(photo);
    }
    data.age = Number(values.age);
    console.log({ data });
    try {
      const res = await createPet(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Pet created successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    name: "",
    species: "",
    breed: "",
    age: 0,
    size: "",
    location: "",
    description: "",
    temperament: "",
    medicalHistory: "",
    adoptionRequirements: "",
  };

  return (
    <TSNFullScreenModal open={open} setOpen={setOpen} title="Create New Pet">
      <TSNForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
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
        <Grid item xs={12} sm={12} md={4}>
          <TSNFileUploader name="file" label="Upload File" />
        </Grid>

        <Button type="submit">Create</Button>
      </TSNForm>
    </TSNFullScreenModal>
  );
};

export default PetModal;
