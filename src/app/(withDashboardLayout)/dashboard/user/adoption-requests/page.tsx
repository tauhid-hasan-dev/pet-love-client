"use client";

import { useGetPendingAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, CircularProgress } from "@mui/material";
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

const AdoptionRequests = () => {
  const [user, setUser] = useState<TUserInfo | null>();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const { data: pendingRequests, isLoading } =
    useGetPendingAdoptionRequestsQuery(user?.id);
  /* console.log(pendingRequests); */

  const handleShowPetDetails = async (id: string) => {
    console.log(id);
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
            onClick={() => handleShowPetDetails(row?.id)}
          >
            See Pet Details
          </Button>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={pendingRequests} columns={columns} />
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
    </Box>
  );
};

export default AdoptionRequests;
