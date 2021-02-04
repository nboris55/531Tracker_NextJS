import useSWR from 'swr'
const url = process.env.URL;

export default function fetchUsers () {
    const { data, error } = useSWR(`${url}/api/profiles`);

    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    }
  }