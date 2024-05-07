export const fetchData = async <T>(
  init?: RequestInit,
  params?: string
): Promise<T> => {
  const res = await fetch(
    `http://localhost:3000/employees${params ? params : ""}`,
    init
  );
  return res.json();
};
