"use client";

import { useGetPendingAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";
import { useGetPetQuery } from "@/redux/api/petApi";
import { getUserInfo } from "@/services/auth.services";
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
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

type TUserInfo = {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TAdoptionRequest = {
  id: string;
  userName: string;
  userEmail: string;
  status: string;
  petId: string;
};

const AdoptionRequests = () => {
  const [open, setOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const [user, setUser] = useState<TUserInfo | null>(null);

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const { data: pendingRequests, isLoading } =
    useGetPendingAdoptionRequestsQuery(user?.id);

  const handleShowPetDetails = (id: string) => {
    setSelectedPetId(id);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedPetId(null);
  };

  const columns: GridColDef[] = [
    { field: "userName", headerName: "User Name", flex: 2 },
    { field: "userEmail", headerName: "User Email", flex: 2 },
    { field: "status", headerName: "Request Status", flex: 2 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleShowPetDetails(row.petId)}
          >
            See Pet Details
          </Button>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Your adoption request list
      </Typography>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={pendingRequests || []}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 100px)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <PetDetailsDialog
        petId={selectedPetId}
        open={open}
        onClose={handleCloseDialog}
      />
    </Box>
  );
};

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

export default AdoptionRequests;
