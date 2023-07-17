import Link from 'next/link';
import Image from 'next/image';
import inno_images from '../utils/images';
import { useAppSelector } from '@/hooks/redux_hooks';

export const AsideNavigation = () => {
    const productDetails = useAppSelector((state) => state.productState);

    return (
        <nav className={'hidden w-fit flex-col space-y-[0.4rem] font-sans text-[#374151] md:flex lg:w-[13.75rem]'}>
            <div className={'flex items-center space-x-2'}>
                <Image src={productDetails.user.profilePicture} width={70} height={70} alt={"User's profile picture"} className={'rounded-full'} />

                <div className={'flex flex-col md:hidden lg:flex'}>
                    <p className={'text-[0.9em] font-semibold'}>{productDetails ? productDetails?.user.firstName + ' ' + productDetails?.user.lastName : null}</p>
                    <p className={'text-[0.7em]'}>{productDetails ? productDetails?.user.position : null}</p>
                </div>
            </div>

            <Link href={'/'} className={'flex h-[2.5rem] items-center justify-center space-x-2 rounded p-1 px-2 transition-colors duration-300 hover:bg-white lg:justify-between'}>
                <div className={'flex space-x-2'}>
                    <Image src={inno_images.innoHome} width={16} height={16} alt={'Home icon'} />
                    <p className={'text-[0.9em] md:hidden lg:inline-block'}>Home</p>
                </div>

                <Image src={inno_images.innoAccordionDownDark} width={16} height={16} alt={'Home icon'} className={'hidden cursor-pointer lg:inline-block'} />
            </Link>

            <Link href={'#'} className={'flex h-[2.5rem] items-center justify-center space-x-2 rounded p-1 px-2 transition-colors duration-300 hover:bg-white lg:justify-between'}>
                <div className={'flex space-x-2'}>
                    <Image src={inno_images.innoGroup} width={16} height={16} alt={'Group icon'} />
                    <p className={'text-[0.9em] md:hidden lg:inline-block'}>Members</p>
                </div>

                <Image src={inno_images.innoAccordionDownDark} width={16} height={16} alt={'Home icon'} className={'hidden cursor-pointer lg:inline-block'} />
            </Link>

            <Link href={'#'} className={'flex h-[2.5rem] items-center justify-center space-x-2 rounded p-1 px-2 transition-colors duration-300 hover:bg-white lg:justify-between'}>
                <div className={'flex space-x-2'}>
                    <Image src={inno_images.innoOrganizations} width={16} height={16} alt={'Organizations icon'} />
                    <p className={'text-[0.9em] md:hidden lg:inline-block'}>Organizations</p>
                </div>

                <Image src={inno_images.innoAccordionDownDark} width={16} height={16} alt={'Home icon'} className={'hidden cursor-pointer lg:inline-block'} />
            </Link>
        </nav>
    );
};
