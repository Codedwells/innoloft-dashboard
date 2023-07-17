import Image from 'next/image';
import inno_images from '../utils/images';
import { useAppSelector } from '@/hooks/redux_hooks';
import Link from 'next/link';

export const Header = () => {
    const productDetails = useAppSelector((state) => state.productState);
    const appConfig = useAppSelector((state) => state.appConfigState);

    // Header color configs
    const mainColor = `bg-[${appConfig.mainColor}]`;
    const iconColor = appConfig.id == 1 ? 'dark' : 'light';
    const textColor = appConfig.id == 1 ? 'text-[#272E71]' : 'text-white';

    return (
        <>
            <header className={`flex h-[3.35rem] items-center justify-between ${mainColor} px-4 text-white shadow md:px-4 lg:px-[15rem] `}>
                <Link href={'/'}>
                    <Image src={appConfig.logo} height={26.29} width={appConfig.id == 2 ? 50 : 140} alt={'Innoloft logo'} className={'text-white'} />
                </Link>

                <div className={'hidden w-full md:flex md:items-center md:justify-center md:px-[2rem]'}>
                    <input
                        type="search"
                        name="search"
                        className={'rounded px-2 py-1 text-sm text-gray-600 placeholder:text-sm focus:outline-none md:w-full lg:max-w-[30rem] lg:pr-[2.2rem]'}
                        placeholder={'Enter interests, keyword, company name, etc.'}
                    />
                    <div className={'-ml-[2rem] h-full'}>
                        <Image src={inno_images.innoSearch} height={16} width={16} alt={'Innoloft search log'} className={''} />
                    </div>
                </div>

                <div className={'hidden h-[1.6rem] w-[11.5rem] items-center space-x-3 md:flex'}>
                    <div className={'w-fit'}>
                        <Image
                            src={iconColor == 'dark' ? inno_images.innoMessengerDark : inno_images.innoMessenger}
                            height={16}
                            width={16}
                            alt={'Innoloft search log'}
                            className={'cursor-pointer text-red-600'}
                        />
                    </div>
                    <div className={'flex w-fit space-x-1'}>
                        <p className={`uppercase ${textColor}`}>EN</p>
                        <Image
                            src={iconColor == 'dark' ? inno_images.innoAccordionDownDark : inno_images.innoAccordionDownLight}
                            height={16}
                            width={16}
                            alt={'Innoloft search log'}
                            className={'cursor-pointer'}
                        />
                    </div>
                    <div className={'w-fit'}>
                        <Image
                            src={iconColor == 'dark' ? inno_images.innoNotificationDark : inno_images.innoNotification}
                            height={16}
                            width={16}
                            alt={'Innoloft search log'}
                            className={'cursor-pointer'}
                        />
                    </div>
                    <div className={'flex w-fit space-x-2 '}>
                        <Image src={productDetails.user.profilePicture || inno_images.profilePic} height={25} width={25} alt={'Innoloft search log'} className={'rounded-full'} />
                        <Image
                            src={iconColor == 'dark' ? inno_images.innoAccordionDownDark : inno_images.innoAccordionDownLight}
                            height={16}
                            width={16}
                            alt={'Innoloft search log'}
                            className={'cursor-pointer'}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};
