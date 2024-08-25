import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const res = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });

    if (res.status === 400 || res.status === 500) {
      throw res.data;
    }
    return res.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
