import { useGetAllAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";
import React from "react";

const AllAdoptionRequests = () => {
  const { data } = useGetAllAdoptionRequestsQuery({});
  console.log({ data });
  return (
    <div>
      <h1>All Adoption Request</h1>
    </div>
  );
};

export default AllAdoptionRequests;
