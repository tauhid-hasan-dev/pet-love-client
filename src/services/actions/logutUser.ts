import { authKey } from "@/app/constants/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  router.push("/");
  router.refresh();
};
