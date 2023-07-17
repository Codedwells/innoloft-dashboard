import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { ProductMainSection } from '@/components/ProductMainSection';
import { ProductVideoSection } from '@/components/ProductVideoSection';
import { ProductDetailSection } from '@/components/ProductDetailSection';

const Product = () => {
    return (
        <main className="flex min-h-fit flex-col space-y-[1rem] pb-[1.25rem]">
            <BreadCrumbs />

            <ProductMainSection />

            <ProductVideoSection />

            <ProductDetailSection />
        </main>
    );
};

export default Product;
