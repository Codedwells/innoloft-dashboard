import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button';
import inno_images from '../../utils/images';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux_hooks';

export const BreadCrumbs = () => {
    const productDetails = useAppSelector((state) => state.productState);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile devices, adjust as needed
    }, [typeof window]);

    return (
        <>
            <nav className="flex justify-between font-sans" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-2 text-[#6B7280]">
                    <li className="inline-flex items-center">
                        <Link
                            href={'/'}
                            className={
                                'flex items-center justify-center rounded border border-transparent p-1 transition-colors duration-300 hover:border-gray-200 hover:bg-slate-100 active:bg-slate-50'
                            }
                        >
                            <Image src={inno_images.innoHome} height={16} width={16} alt={'Home icon'} />
                        </Link>
                    </li>

                    <li className="inline-flex items-center">
                        <Image src={inno_images.chevronRight} height={20} width={20} alt={'Arrow Right icon'} />

                        <a href="#" className="inline-flex items-center text-[0.8em]">
                            Offers
                        </a>
                    </li>
                    <li className="inline-flex items-center">
                        <Image src={inno_images.chevronRight} height={20} width={20} alt={'Arrow Right icon'} />

                        <a href="#" className="inline-flex items-center text-[0.8em] font-[500]">
                            {isMobile ? productDetails?.name.slice(0, 30) + '...' : productDetails?.name}
                        </a>
                    </li>
                </ol>

                <Link href={`/product/edit/${productDetails?.name.split(' ').join('-')}`}>
                    <Button>Edit</Button>
                </Link>
            </nav>
        </>
    );
};
