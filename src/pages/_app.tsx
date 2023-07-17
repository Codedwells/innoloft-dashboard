import store from '@/store';
import '@/styles/globals.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import RootLayout from '@/pages/layout';
import type { AppProps } from 'next/app';
import { IProductData } from '@/types/types';

export default function App({ Component, pageProps }: AppProps) {
    const [productData, setProductData] = useState<IProductData | null>(null);

    return (
        <Provider store={store}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </Provider>
    );
}
