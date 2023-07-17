import { useFormik } from 'formik';
import { setVideo } from '@/store/product.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';

interface ContentBlockProps {
    type?: 'edit' | 'view';
}

export const ProductVideoSection = ({ type = 'view' }: ContentBlockProps) => {
    const videoUrl = useAppSelector((state) => state.productState.video);
    const dispatch = useAppDispatch();

    const embedUrl = videoUrl.replace('watch?v=', 'embed/');

    // Formik link form
    const linkForm = useFormik({
        initialValues: {
            link: ''
        },
        onSubmit: (values) => {
            dispatch(setVideo(values.link));
            linkForm.setFieldValue('link', '');
        }
    });

    // Handle input Keydown (Enter key)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Perform the submit action here
            linkForm.submitForm();
        }
    };
    return (
        <>
            <section className={'flex flex-col items-center space-y-[1.25rem] rounded-md border bg-white p-[1rem]'}>
                <p className={'w-full text-[0.9em] font-[500] text-[#374151]'}>Video</p>

                <iframe
                    className={'w-[280px] md:h-[315px] md:w-[560px]'}
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

                {type == 'edit' && (
                    <input
                        type="text"
                        name="link"
                        id={'link'}
                        value={linkForm.values.link}
                        onChange={linkForm.handleChange}
                        onKeyDown={handleKeyDown}
                        className={'w-full rounded-md border p-2 text-[0.9em] text-[#6B7280] placeholder:text-[0.9em] focus:outline-none'}
                        placeholder={'Add a youtube link'}
                    />
                )}
            </section>
        </>
    );
};
