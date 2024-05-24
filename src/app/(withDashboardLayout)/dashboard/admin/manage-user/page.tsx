"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import PetModal from "./components/PetModal";
import { useState } from "react";

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Create Admin</Button>
        <PetModal open={isModalOpen} setOpen={setIsModalOpen}></PetModal>
        <TextField size="small" placeholder="Search users"></TextField>
      </Stack>
    </Box>
  );
};

export default ManageUsers;
