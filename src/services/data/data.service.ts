// This will simulate a service fetching data (e.g., from DB)
export const fetchAllData = async (): Promise<object[]> => {
  // Simulated data - replace with DB call (e.g., Mongoose)
  return [
    { id: 1, name: "Sample 1" },
    { id: 2, name: "Sample 2" },
  ];
};
