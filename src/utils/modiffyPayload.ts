export const modifyPayload = (values: any) => {
  console.log("coming from modify payload component", values);
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file as Blob);

  return formData;
};