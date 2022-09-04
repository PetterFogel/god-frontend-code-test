import { Car } from "./car";

export interface CarsDataResponse {
  data: Car[];
  isLoading: boolean;
  error: string | null;
}

export interface CarDataResponse {
  data: Car;
  isLoading: boolean;
  error: string | null;
}
