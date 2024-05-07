export const fetchData = async <T>(init?: RequestInit): Promise<T> => {
  const res = await fetch("http://localhost:3000/employees", init);
  return res.json();
};