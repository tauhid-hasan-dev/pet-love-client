"use client";

import {
  useGetAllAdoptedPetsQuery,
  useGetPendingAdoptionRequestsQuery,
} from "@/redux/api/adoptionRequestApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import PetDetailsDialog from "../components/PetDetailsDialog";

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

  const { data: adoptedPets, isLoading } = useGetAllAdoptedPetsQuery(user?.id);
  console.log({ pendingRequests: adoptedPets });

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
            rows={adoptedPets || []}
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

/* "use client";

import { useGetAllAdoptedPetsQuery } from "@/redux/api/adoptionRequestApi";
import { getUserInfo } from "@/services/auth.services";
import React, { useEffect, useState } from "react";

type TUserInfo = {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

const AdoptedPets = () => {
  const [user, setUser] = useState<TUserInfo | null>();

  useEffect(() => {
    const userInfo: TUserInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const { data } = useGetAllAdoptedPetsQuery(user?.id);
  console.log({ data });

  return (
    <div>
      <h1>Adopted pet lists</h1>
    </div>
  );
};

export default AdoptedPets; */
