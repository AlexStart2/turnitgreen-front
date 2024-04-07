import { jwtDecode } from "jwt-decode";


export default function isTokenExpired(token) {
    if (!token) return true; // Token not provided
    const decodedToken = jwtDecode(token);
    const now = Date.now() / 1000; // Current time in seconds
    const isExpired = decodedToken.exp < now;
    return isExpired;
  }