const getLocalData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Error parsing localStorage data:", err);
    return null;
  }
};

export default getLocalData;