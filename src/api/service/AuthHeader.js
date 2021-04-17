export default function authHeader(token) {
  console.log("AuthHeader Get Token ==> ", token);
  const header = {
    "Content-Type": "application/json; charset=utf8",
    "Access-Control-Allow-Origin": "*",
    accept: "application/json",
    credentials: "include",
  };

  if (token) {
    return {
      ...header,
      token: token,
    };
  } else {
    return header;
  }
}
