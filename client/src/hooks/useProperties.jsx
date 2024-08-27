import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    {
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );

  return { data, isError, isLoading, refetch };
};

export default useProperties;
