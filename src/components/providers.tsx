'use client'
import {
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

export function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={undefined}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}