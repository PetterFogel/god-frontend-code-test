import {
  CarDataResponse,
  CarsDataResponse,
} from "../../models/carsDataResponse";
import { Car } from "../../models/car";
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

export const useFetchSpecificCar = (
  id: string | string[] | undefined
): CarDataResponse => {
  const { data, error } = useSWR("/api/cars.json", fetcher);

  return {
    data: data && data.find((c: Car) => c.id === id),
    isLoading: !error && !data,
    error,
  };
};
