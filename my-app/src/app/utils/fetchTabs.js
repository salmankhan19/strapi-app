export const fetchTabs = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/tabs");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching tabs:", error);
    return [];
  }
};
