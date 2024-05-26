"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DasboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return (
    <DashboardDrawer>
      <Box sx={{ my: 2 }}>{children}</Box>
    </DashboardDrawer>
  );
};

export default DashboardLayout;
