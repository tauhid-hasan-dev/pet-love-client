"use client";

import { useGetAllAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import PetDetailsDialog from "../../user/components/PetDetailsDialog";

const AdoptionRequests = () => {
  const [open, setOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const { data: allAdoptionRequests, isLoading } =
    useGetAllAdoptionRequestsQuery({});

  const handleShowPetDetails = (id: string) => {
    setSelectedPetId(id);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedPetId(null);
  };

  const columns: GridColDef[] = [
    { field: "userName", headerName: "User Name", flex: 1 },
    { field: "userEmail", headerName: "User Email", flex: 1 },
    { field: "petId", headerName: "Pet ID", flex: 1 },
    {
      field: "action",
      headerName: "See requested pet details",
      flex: 0.8,
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
    {
      field: "status",
      headerName: "Request Status",
      flex: 0.5,
      renderCell: ({ value }) => (
        <Typography
          sx={{
            fontWeight: "bold",
            color:
              value === "REJECTED"
                ? "red"
                : value === "PENDING"
                ? "#6504B5"
                : value === "APPROVED"
                ? "#9BCF53"
                : "inherit",
          }}
        >
          {value}
        </Typography>
      ),
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
            rows={allAdoptionRequests || []}
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

export default AdoptionRequests;
