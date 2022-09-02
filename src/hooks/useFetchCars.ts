import { CarsDataResponse } from "../../models/carsDataResponse";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchCars = (): CarsDataResponse => {
  const { data, error } = useSWR("/api/cars.json", fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
