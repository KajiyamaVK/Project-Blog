import '@/styles/globals.css';
import Topbar from '@/components/Navigation/Topbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Topbar />
      <Component {...pageProps} />
    </div>
  );
}
