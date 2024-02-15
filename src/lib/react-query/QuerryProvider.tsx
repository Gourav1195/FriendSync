import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient(); 

export const QuerryProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={QueryClient}>
        {children}
    </QueryClientProvider>
  )
}

