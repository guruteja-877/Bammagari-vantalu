// const API_URL = "http://localhost:5000/api";

// export const getFoods = async () => {
//   const response = await fetch(`${API_URL}/foods`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch foods");
//   }

//   const result = await response.json();

//   return result.data;
// };


const API_URL = "http://localhost:5000/api";

const getToken = () => {
  return (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  );
};

const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result.data;
};

// ==================== AUTH ====================

export const registerUser = async (userData) => {
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (credentials) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

export const getProfile = async () => {
  return apiRequest("/auth/profile");
};

// ==================== FOODS ====================

export const getFoods = async () => {
  return apiRequest("/foods");
};

export const getFeaturedFoods = async () => {
  return apiRequest("/foods/featured");
};

export const getBestSellerFoods = async () => {
  return apiRequest("/foods/best-sellers");
};

export const getVegFoods = async () => {
  return apiRequest("/foods/veg");
};

export const getNonVegFoods = async () => {
  return apiRequest("/foods/non-veg");
};

export const getFoodsByRegion = async (region) => {
  return apiRequest(`/foods/region/${encodeURIComponent(region)}`);
};

export const getFoodsByCategory = async (categoryId) => {
  return apiRequest(`/foods/category/${categoryId}`);
};

export const getFoodById = async (foodId) => {
  return apiRequest(`/foods/${foodId}`);
};

// ==================== CART ====================

export const getCart = async () => {
  return apiRequest("/cart");
};

export const addToCart = async (foodId, quantity = 1) => {
  return apiRequest("/cart", {
    method: "POST",
    body: JSON.stringify({
      foodId,
      quantity,
    }),
  });
};

export const updateCartItem = async (foodId, quantity) => {
  return apiRequest("/cart", {
    method: "PUT",
    body: JSON.stringify({
      foodId,
      quantity,
    }),
  });
};

export const removeFromCart = async (foodId) => {
  return apiRequest(`/cart/${foodId}`, {
    method: "DELETE",
  });
};

export const clearCart = async () => {
  return apiRequest("/cart", {
    method: "DELETE",
  });
};