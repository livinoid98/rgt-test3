import App from "next/app"
import "../styles/order.scss"
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

const RGT = ({ Component, pageProps }: AppProps) => {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps}/>
            </QueryClientProvider>
        </>
    )
}

export default RGT;

RGT.getInitialProps = async (appContext: any) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}