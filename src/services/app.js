export async function fetchUserData(userId) {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const data = await response.json();
  return data.data;
}
