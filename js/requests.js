import state from "./state.js";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${state.url}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`); ///
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
}

export { fetchData };
