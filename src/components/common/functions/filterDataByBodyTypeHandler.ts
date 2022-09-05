import { Car } from "../../../../models/car";

export const filterDataByBodyTypeHandler = (data: Car[], bodyType: string) => {
  return bodyType === "all"
    ? data
    : data.filter((car) => car.bodyType === bodyType);
};
