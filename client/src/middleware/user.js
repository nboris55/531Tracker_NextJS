import useSWR from 'swr'
const url = process.env.URL;

export default function useUser () {
    const { data, error } = useSWR(`${url}/api/me`);

    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
      signedIn: data
    }
  }