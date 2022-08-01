import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '../styles/reset.css';
import { RecoilRoot } from 'recoil';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navbar />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
