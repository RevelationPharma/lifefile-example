export function authenticate(authHeader: string): boolean {
  const encodedCredentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("ascii");
  const [username, password] = decodedCredentials.split(":");

  // TODO
  // TODO
  // TODO
  const validUsername = "your-username";
  const validPassword = "your-password";

  return username === validUsername && password === validPassword;
}
