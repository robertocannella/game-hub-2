import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import {
  FetchResponse
} from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    //initialData: platforms
  })
export default usePlatforms;
