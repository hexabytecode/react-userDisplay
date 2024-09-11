import axios from "axios";

export async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    return response.data.data;
  } catch (e) {
    throw new Error(`Failed to fetch data - ${e.message}`);
  }
}
