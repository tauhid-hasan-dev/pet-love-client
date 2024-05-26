"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
/* import DoctorModal from "./components/DoctorModal"; */
import { useState } from "react";
/* import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi"; */
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
/* import { useDebounced } from "@/redux/hooks"; */
// import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import PetModal from "./components/PetModal";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { useDebounced } from "@/redux/hooks";

const PetManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(searchTerm);

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  // const { data, isLoading } = useGetAllPetsQuery({ ...query });
  const { data, isLoading } = useGetAllPetsQuery({ ...query });
  console.log(data);

  const pets = data?.pets || []; // Default to empty array if undefined
  // const meta = data?.meta;

  const handleDelete = async (id: string) => {
    console.log(id);
    /* try {
      const res = await deleteDoctor(id).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Doctor deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    } */
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 0.7 },
    { field: "species", headerName: "Type", flex: 0.6 },
    { field: "breed", headerName: "Breed", flex: 0.7 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "medicalHistory", headerName: "Health Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 0.4,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Link href={`/dashboard/admin/manage-pets/edit/${row.id}`}>
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Pet</Button>
        <PetModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search pets"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={pets} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default PetManagement;
