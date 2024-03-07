import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const isPostPage = router.pathname.startsWith("/posts/");

      if (isPostPage) {
        
      } else {
        console.log("Theme set to default color");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    handleRouteChange();

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname]);

  return <Component {...pageProps} />;
}


export default MyApp;
