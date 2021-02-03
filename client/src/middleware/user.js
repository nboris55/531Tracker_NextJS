import useSWR from 'swr'

export default function useUser () {
    const { data, error } = useSWR('http://localhost:3000/api/me');

    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
      signedIn: data
    }
  }