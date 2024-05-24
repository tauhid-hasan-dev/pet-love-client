import TSNModal from "@/components/Shared/TSNModal/TSNModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const ManageUsers = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button>Create Admin</Button>
        <TSNModal></TSNModal>
        <TextField size="small" placeholder="Search users"></TextField>
      </Stack>
    </Box>
  );
};

export default ManageUsers;
