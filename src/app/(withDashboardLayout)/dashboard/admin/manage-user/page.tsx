"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import UserModal from "./components/UserModal";
import { useState } from "react";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllUserQuery({});
  console.log({ data });

  const handleDelete = async (id: string) => {
    console.log(id);
    /* try {
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.success("Specialty deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    } */
  };

  // console.log(data);
  const columns: GridColDef[] = [
    {
      field: "icon",
      headerName: "Photo",
      flex: 0.3,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.profilePhoto} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 0.6 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 0.5 },
    {
      field: "Assign Role",
      headerName: "Assign Role",
      flex: 0.7,
      renderCell: ({ row }) => {
        return (
          <Button variant="outlined" size="small">
            Assign
          </Button>
        );
      },
    },
    { field: "status", headerName: "Status", flex: 0.5 },
    {
      field: "Update Status",
      headerName: "Update Status",
      flex: 0.6,
      renderCell: ({ row }) => {
        return (
          <Button variant="outlined" size="small">
            Update
          </Button>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      flex: 0.4,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Create Admin</Button>
        <UserModal open={isModalOpen} setOpen={setIsModalOpen}></UserModal>
        <TextField size="small" placeholder="Search users"></TextField>
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default ManageUsers;
