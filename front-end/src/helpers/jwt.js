import jwtDecode from 'jwt-decode';

const FORMAT_DIVIDER = 1000;

export default function validToken(token) {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / FORMAT_DIVIDER;

  return decoded.exp > currentTime;
}
