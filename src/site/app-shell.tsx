'use client';

import type { ReactNode } from 'react';
/**
 * App Component — Editorial Portfolio
 *
 * Routing: React Router v7 library mode — createBrowserRouter + RouterProvider.
 * - Import from 'react-router' only. Never from 'react-router-dom'.
 */

import { Outlet, useLocation, OutletProvider } from '@/lib/router-compat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

/** Reset scroll position on every route change — prevents IntersectionObserver
 *  from seeing below-fold elements as already-intersecting from a prior scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
		},
	},
});

function RootLayout() {
	return (
		<>
			<ScrollToTop />
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default function AppShell({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<OutletProvider outlet={children}><RootLayout /></OutletProvider>
		</QueryClientProvider>
	);
}
