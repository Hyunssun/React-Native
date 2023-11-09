import { atom } from "recoil";

type LocationType = {
  latitude: number;
  longitude: number;
  timestamp: number;
  city: string | null;
};

export const LocationState = atom({
  key: "locationState",
  default: <LocationType>{
    latitude: 0,
    longitude: 0,
    timestamp: 0,
    city: "",
  },
});
