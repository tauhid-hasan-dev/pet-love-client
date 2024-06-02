"use client";

import { useGetPendingAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";
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

const AdoptionRequests = () => {
  const [user, setUser] = useState<TUserInfo | null>();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const { data } = useGetPendingAdoptionRequestsQuery(user?.id);
  console.log({ data });
  return (
    <div>
      <h1>My all adoption requests list</h1>
    </div>
  );
};

export default AdoptionRequests;
