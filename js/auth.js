const API_BASE_URL = "https://login-agenda-backend.onrender.com/api/v1";

export async function login(email, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.detail || "Error al iniciar sesión");
  }

  return await response.json(); // devuelve access_token
}
