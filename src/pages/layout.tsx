import { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { setProduct } from '@/store/product.slice';
import { setAppConfig } from '@/store/appConfig.slice';
import { AsideNavigation } from '../components/Navigation';
import { getConfigData, getProducts } from '@/pages/api/product';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';

const APP_ID = process.env.NEXT_PUBLIC_APP_ID || 1;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const hasUserSection = useAppSelector((state) => state.appConfigState.hasUserSection);
    const dispatch = useAppDispatch();

    // Get app configuration
    const getAppConfig = async () => {
        const data = await getConfigData({ APP_ID: Number(APP_ID) });

        dispatch(setAppConfig(data));
    };

    // Get product data and set global product state
    const getProductData = async () => {
        const data = await getProducts({ productId: 6781 });

        if (data) {
            dispatch(setProduct(data));
        }
    };

    useEffect(() => {
        getProductData();
        getAppConfig();
    }, []);
    return (
        <>
            <Header />

            <div className={'mt-[1.25rem] px-4 md:flex md:space-x-[1.5rem] lg:px-[15rem]'}>
                {/*Navigation*/}
                {hasUserSection && <AsideNavigation />}

                {/*Main*/}
                <section className={'flex-1'}>{children}</section>
            </div>
        </>
    );
}
