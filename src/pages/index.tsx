import Link from 'next/link';
import { Button } from '@/components/Button';
import { useAppSelector } from '@/hooks/redux_hooks';

export default function Home() {
    const productName = useAppSelector((state) => state.productState.name);

    return (
        <main className="flex min-h-fit flex-col space-y-[1rem] pb-[1.25rem]">
            <div className={'flex items-center justify-between rounded-md border bg-gradient-to-br  from-slate-100 to-zinc-100 p-2'}>
                <p className="inline-flex items-center text-[1em] font-[500] capitalize">Home </p>
                <Link href={`/product/${productName.split(' ').join('-')}`}>
                    <Button>View Product</Button>
                </Link>
            </div>
        </main>
    );
}
