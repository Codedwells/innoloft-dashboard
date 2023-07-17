import Link from 'next/link';
import { Button } from '@/components/Button';
import { useAppSelector } from '@/hooks/redux_hooks';
import { ProductVideoSection } from '@/components/ProductVideoSection';
import { ProductMainSection } from '@/components/ProductMainSection';
import { ProductDetailSection } from '@/components/ProductDetailSection';

export const Product = () => {
    const productData = useAppSelector((state) => state.productState);

    return (
        <>
            <section className="flex min-h-fit flex-col space-y-[1rem] pb-[1.25rem]">
                <div className={'flex items-center justify-between'}>
                    <p className="inline-flex items-center text-[1em] font-[500] capitalize">{productData?.name} </p>

                    <Link href={'/product/intelligent-finite-elements-in-structural-mechanics'}>
                        <Button>View Offer</Button>
                    </Link>
                </div>

                <ProductMainSection type={'edit'} />

                <ProductVideoSection type={'edit'} />

                <ProductDetailSection type={'edit'} />
            </section>
        </>
    );
};

export default Product;
