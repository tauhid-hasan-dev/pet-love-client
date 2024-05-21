"use server";
import { FormValues } from "@/app/login/page";

// ${process.env.NEXT_PUBLIC_BACKEND_API_URL}

export const userLogin = async (data: FormValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
