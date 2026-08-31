const API_URL = "http://localhost:5000/api";

export const getFoods = async () => {
  const response = await fetch(`${API_URL}/foods`);

  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }

  const result = await response.json();

  return result.data;
};