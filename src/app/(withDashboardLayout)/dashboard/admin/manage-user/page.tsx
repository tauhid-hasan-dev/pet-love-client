"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import UserModal from "./components/UserModal";
import { useState } from "react";
import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/redux/api/userApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllUserQuery({});
  console.log({ data });

  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const updatedUser = await updateUserStatus({
        id: id,
        body: { status: newStatus },
      });
      console.log("User status updated:", updatedUser);
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  const handleUpdateRole = async (id: string, newRole: string) => {
    try {
      const updatedUser = await updateUserRole({
        id: id,
        body: { role: newRole },
      });
      console.log("User role updated:", updatedUser);
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "icon",
      headerName: "Photo",
      flex: 0.3,
      renderCell: ({ row }) => (
        <Box>
          <Image src={row.profilePhoto} width={30} height={30} alt="icon" />
        </Box>
      ),
    },
    { field: "name", headerName: "Name", flex: 0.6 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 0.5 },
    {
      field: "Assign Role",
      headerName: "Assign Role",
      flex: 0.7,
      renderCell: ({ row }) => {
        const newRole = row.role === "ADMIN" ? "USER" : "ADMIN";
        return (
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleUpdateRole(row.id, newRole)}
          >
            {row.role === "ADMIN" ? "Make User" : "Make Admin"}
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
        const newStatus = row.status === "ACTIVE" ? "BLOCKED" : "ACTIVE";
        return (
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleUpdateStatus(row.id, newStatus)}
          >
            {row.status === "ACTIVE" ? "Block" : "Activate"}
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
      renderCell: ({ row }) => (
        <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
          <DeleteIcon sx={{ color: "#FF7F7F" }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Link href="/dashboard/admin/create-admin">
          <Button>Create Admin</Button>
        </Link>
        {/* <UserModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
        <TextField size="small" placeholder="Search users" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
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

export default ManageUsers;
