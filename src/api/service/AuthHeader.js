export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));
  const header = {
    "Content-Type": "application/json; charset=utf8",
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  };

  if (token) {
    return {
      ...header,
      Authorization: "Bearer " + token,
    };
  } else {
    return header;
  }
}
