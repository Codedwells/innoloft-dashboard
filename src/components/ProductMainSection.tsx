import Link from 'next/link';
import Image from 'next/image';
import inno_images from '@/utils/images';
import Editor from '@/components/Editor';
import { Button } from '@/components/Button';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { updateProduct } from '@/pages/api/product';
import { ToastContainer, toast } from 'react-toastify';
import { setMainDetails, setProduct } from '@/store/product.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';

interface InfoHeaderProps {
    className?: string;
    type?: 'edit' | 'view';
}

export const ProductMainSection = ({ className, type = 'view' }: InfoHeaderProps) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const productData = useAppSelector((state) => state.productState);
    const appConfig = useAppSelector((state) => state.appConfigState);

    // App color config
    const mainColor = appConfig.id == 1 ? 'bg-[#272E71]' : `bg-[${appConfig.mainColor}]`;

    //Show user notification
    const showToast = ({ type, message }: { type: 'success' | 'warn' | 'error' | 'info'; message: string }) => {
        toast[type](message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
        });
    };

    // Update Product Details db
    const updateProductDetails = async () => {
        const data = await updateProduct({
            productId: productData.id,
            productData
        });

        // Update product state
        //dispatch(setProduct(data));
    };

    // Save name and description
    const handleSave = () => {
        dispatch(
            setMainDetails({
                name,
                description
            })
        );

        updateProductDetails();

        // Show toast
        showToast({ type: 'success', message: 'Product details updated!' });
    };

    useEffect(() => {
        setDescription(productData?.description);
        setName(productData?.name);
    }, [productData.description, productData.name]);

    return (
        <>
            <ToastContainer />

            <section className={`flex w-full flex-col rounded-md border bg-white lg:flex-row ${className} `}>
                {/*Left Section*/}
                <div className={'flex flex-1 flex-col rounded-tl-md border-r bg-white'}>
                    <div className={'rounded-tl-md'}>
                        <div className={'absolute'}>
                            <div className={'relative flex items-center space-x-2 rounded-br-md rounded-tl-md bg-white pr-2'}>
                                <div className={`w-fit rounded-br-md rounded-tl-md ${mainColor} p-2`}>
                                    <Image src={inno_images.innoBadge} height={15} width={15} alt={'Badge icon'} />
                                </div>

                                <p className={'text-[0.8em] font-[500] text-[#374151]'}>Patent</p>

                                {type === 'edit' && <Image src={inno_images.innoDelete} height={15} width={15} alt={'Trash icon'} />}
                            </div>
                        </div>
                        <Image src={productData?.picture} width={746} height={300} alt={'Product image'} className={'rounded-tl-md'} />
                    </div>
                    <div className={'flex flex-col space-y-[0.6rem] p-[1rem]'}>
                        {type === 'edit' ? (
                            <>
                                <input
                                    type={'text'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={'rounded-md border p-1 text-[0.9em] font-[500] text-[#374151] focus:outline-none'}
                                />

                                <Editor value={description} onChange={setDescription} />
                            </>
                        ) : (
                            <>
                                <h3 className={'text-[0.9em] font-[500] text-[#374151]'}>{productData?.name}</h3>
                                <div className={'whitespace-normal text-[0.75em] text-[#6B7280]'} dangerouslySetInnerHTML={{ __html: description }}></div>
                            </>
                        )}
                    </div>

                    {type == 'edit' && (
                        <div className={'mt-[1rem] flex items-center justify-end space-x-2 p-[1rem]'}>
                            <Link href={`/product/${productData?.name.split(' ').join('-')}`}>
                                <Button>Cancel</Button>
                            </Link>
                            <Button onClick={handleSave}>Save</Button>
                        </div>
                    )}
                </div>

                {/*Right Section*/}
                <div className={'flex w-[23.8rem] flex-col pb-4 md:p-[1rem] md:pb-0'}>
                    <div className={'mb-2 flex flex-col space-y-[0.62rem] p-4 md:p-0'}>
                        <h3 className={'text-[0.8em] font-[500] text-[#374151]'}>Offered By</h3>

                        <Image src={productData?.company.logo} width={150} height={36.31} alt={'Product image'} />

                        <div className={'flex items-center space-x-3'}>
                            <Image src={productData?.user.profilePicture} width={50} height={50} alt={"User's profile picture"} className={'rounded-full'} />

                            <div className={'flex flex-col text-[#6B7280]'}>
                                <p className={'text-[0.875em] font-semibold'}>{productData ? productData?.user.firstName + ' ' + productData?.user.lastName : null}</p>
                                <p className={'text-[0.75em]'}>{productData ? productData?.user.position : null}</p>
                            </div>
                        </div>

                        <div className={'flex items-start space-x-1 '}>
                            <Image src={inno_images.innoLocation} width={16} height={16} alt={'Location icon'} />
                            <p className={'max-w-[10rem] whitespace-normal text-[0.8em] text-[#6B7280]'}>
                                {`${productData?.company.address.street} ${productData?.company.address.city.name} ${productData?.company.address.country.name}`}
                            </p>
                        </div>
                    </div>

                    {/*Map*/}
                    {type === 'view' && <Image src={inno_images.mapImage} width={342} height={201} alt={'Product image'} className={'mx-auto'} />}
                </div>
            </section>
        </>
    );
};
