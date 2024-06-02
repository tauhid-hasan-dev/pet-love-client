"use client";

import { useGetAllAdoptedPetsQuery } from "@/redux/api/adoptionRequestApi";
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

const AdoptedPets = () => {
  const [user, setUser] = useState<TUserInfo | null>();

  useEffect(() => {
    const userInfo: TUserInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const { data } = useGetAllAdoptedPetsQuery(user?.id);
  console.log({ data });

  return (
    <div>
      <h1>Adopted pet lists</h1>
    </div>
  );
};

export default AdoptedPets;
