import config from "../config";
const URL = `${config.SERVER_URL}/api/positions`;

export async function getPosition() {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    return error;
  }
}
