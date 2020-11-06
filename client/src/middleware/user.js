import useSWR from "swr";

export default function useUser() {
  const { data, error, mutate } = useSWR('http://localhost:3000/api/me');

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
