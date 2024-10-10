export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch meals.");
  }

  return data;
}

export async function updateUserPlaces(places) {
  const res = await fetch("http://localhost:3000/orders", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ places }),
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Failed to update meals.");
  }

  return resData;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/orders");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user meals.");
  }

  return data;
}
