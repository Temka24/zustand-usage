'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: ReactNode }) {
    const [client] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={client}>
            {children}
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
