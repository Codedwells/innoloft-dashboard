import Image from 'next/image';
import TagInput from './TagInput';
import inno_images from '../utils/images';
import { useAppSelector } from '@/hooks/redux_hooks';
import { OfferDetailsList } from '@/components/Lists/OfferDetailsList';

interface IOfferDetailsBlockProps {
    type?: 'edit' | 'view';
}

export const ProductDetailSection = ({ type = 'view' }: IOfferDetailsBlockProps) => {
    const productData = useAppSelector((state) => state.productState);

    return (
        <>
            <section className={'flex flex-col space-y-[1.25rem] rounded-md border bg-white px-[1.25rem] py-[1.88rem]'}>
                <p className={'w-full text-[0.9em] font-[500] text-[#374151]'}>Offer Details</p>

                <div className={'flex flex-col space-y-[2rem] text-[#6B7280] md:flex-row md:space-x-[2.5rem] md:space-y-0'}>
                    <div className={'flex flex-1 flex-col space-y-[0.62rem]'}>
                        <div className={'flex items-center space-x-2'}>
                            <Image src={inno_images.innoDev} width={24} height={24} alt={'Cog wheel icon'} />
                            <p className={'text-[0.9em] text-[]'}>Technology</p>
                        </div>
                        {type == 'view' ? <OfferDetailsList type={'technology'} categoryData={productData?.categories} /> : <TagInput placeholder={'Add new technology...'} type={'technology'} />}
                    </div>

                    <div className={'flex flex-1 flex-col space-y-[0.62rem]'}>
                        <div className={'flex items-center space-x-2'}>
                            <Image src={inno_images.innoStrategy} width={24} height={24} alt={'Horse icon'} />
                            <p className={'text-[0.9em] text-[]'}>Business Model</p>
                        </div>

                        {type == 'view' ? (
                            <OfferDetailsList type={'businessModel'} businessModelData={productData?.businessModels} />
                        ) : (
                            <TagInput placeholder={'Add new model...'} type={'businessModel'} />
                        )}
                    </div>
                </div>
                <div className={'flex flex-col space-y-[2rem] text-[#6B7280] md:flex-row md:space-x-[2.5rem] md:space-y-0'}>
                    <div className={'flex flex-1 flex-col space-y-[0.62rem]'}>
                        <div className={'flex items-center space-x-2'}>
                            <Image src={inno_images.innoClock} width={24} height={24} alt={'Clock icon'} />
                            <p className={'text-[0.9em] text-[]'}>TRL</p>
                        </div>

                        {type == 'view' ? <OfferDetailsList type={'trl'} trlData={productData?.trl} /> : <TagInput showInput={false} type={'trl'} />}
                    </div>

                    <div className={'flex flex-1 flex-col space-y-[0.62rem]'}>
                        <div className={'flex items-center space-x-2'}>
                            <Image src={inno_images.innoInvestor} width={24} height={24} alt={'Investor icon'} />
                            <p className={'text-[0.9em] text-[]'}>Costs</p>
                        </div>

                        {type == 'view' ? (
                            <OfferDetailsList type={'investmentEffort'} investmentEffortData={productData?.investmentEffort} />
                        ) : (
                            <TagInput placeholder={'Add new value ...'} type={'investmentEffort'} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
