import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/reset.css';
import { RecoilRoot } from 'recoil';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
        <Navbar />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
