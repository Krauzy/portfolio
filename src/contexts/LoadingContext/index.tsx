/* eslint-disable @typescript-eslint/no-unused-vars */

import Loading from "@/components/Loading";
import { createContext, ReactNode, useState } from "react"

interface LoadingContextProperties {
  setLoading: (value: boolean) => void;
  loading: boolean;
}

export const LoadingContext = createContext<LoadingContextProperties>({
  setLoading: (value: boolean) => {},
  loading: false
});

interface LoadingContextProviderProperties {
  children: ReactNode
}

export default function LoadingContextProvider({ children } : Readonly<LoadingContextProviderProperties>) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  )
}
