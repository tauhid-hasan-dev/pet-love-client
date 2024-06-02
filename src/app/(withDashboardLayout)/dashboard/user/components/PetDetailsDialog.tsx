import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import { useGetPetQuery } from "@/redux/api/petApi";

type PetDetailsDialogProps = {
  petId: string | null;
  open: boolean;
  onClose: () => void;
};

const PetDetailsDialog = ({ petId, open, onClose }: PetDetailsDialogProps) => {
  const { data: petData, isLoading: isPetLoading } = useGetPetQuery(
    petId ?? undefined
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>See requested pet details for adoption</DialogTitle>
      <DialogContent>
        {isPetLoading ? (
          <CircularProgress />
        ) : petData ? (
          <DialogContentText>
            <Typography variant="body1">Name: {petData.name}</Typography>
            <Typography variant="body1">Type: {petData.species}</Typography>
            <Typography variant="body1">Gender: {petData.gender}</Typography>
            <Typography variant="body1">Size: {petData.size}</Typography>
            <Typography variant="body1">Age: {petData.age}</Typography>
            <Typography variant="body1">Breed: {petData.breed}</Typography>
            <Typography variant="body1">
              Location: {petData.location}
            </Typography>
            <Typography variant="body1">
              Description: {petData.description}
            </Typography>
          </DialogContentText>
        ) : (
          <Typography variant="body1">No pet data available.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PetDetailsDialog;
