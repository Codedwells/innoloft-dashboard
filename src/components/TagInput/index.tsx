import { useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidV4 } from 'uuid';
import { trlType } from '@/types/types';
import { Label } from '@/components/Label';
import { SlArrowDown } from 'react-icons/sl';
import { TRLList } from '@/components/Lists/TRLList';
import { useAppDispatch, useAppSelector } from '@/hooks/redux_hooks';
import { addBusinessModel, addCategory, removeBusinessModel, removeCategory, updateInvestmentEffort, updateTRL } from '@/store/product.slice';

export type possibleTypes = 'categoryData' | 'businessModelData' | 'investmentEffortData' | 'trlData';

interface ITagInputProps {
    showInput?: boolean;
    placeholder?: string;
    type: 'technology' | 'businessModel' | 'investmentEffort' | 'trl';
}

export const TagInput = ({ type, showInput = true, placeholder = '' }: ITagInputProps) => {
    const dispatch = useAppDispatch();
    const productData = useAppSelector((state) => state.productState);

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    let List: React.JSX.Element[] | null = null;

    // Formik Tag Form
    const tagForm = useFormik({
        initialValues: {
            tag: '',
            type: type
        },
        onSubmit: (values) => {
            if (values.type == 'technology') {
                let newCategory = { id: Math.floor(Math.random() * 1_000_000), name: values.tag };
                dispatch(addCategory(newCategory));

                tagForm.setFieldValue('tag', '');
            } else if (values.type == 'businessModel') {
                let newModel = { id: Math.floor(Math.random() * 1_000_000), name: values.tag };
                dispatch(addBusinessModel(newModel));

                tagForm.setFieldValue('tag', '');
            } else if (values.type == 'investmentEffort') {
                dispatch(updateInvestmentEffort(values.tag));

                tagForm.setFieldValue('tag', '');
            }
        }
    });

    // Handle input Keydown (Enter key)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Perform the submit action here
            tagForm.submitForm();
        }
    };

    // Set new TRL
    const setTRL = (trl: trlType) => {
        dispatch(updateTRL(trl));
        setShowDropdown(false);
    };

    //Remove a tag from the list (works for Technology and Business Model) && Edit for Investment Effort tag
    const removeTag = ({ id, tagType }: { id: number; tagType: possibleTypes }) => {
        if (tagType == 'categoryData') {
            dispatch(removeCategory({ id }));
        } else if (tagType == 'businessModelData') {
            dispatch(removeBusinessModel({ id }));
        }
    };

    // Render the tags based on the type
    switch (type) {
        case 'technology':
            List = productData.categories.map((item, index) => {
                return (
                    <Label removeTag={removeTag} tagId={item.id} tagType={'categoryData'} type={'edit'} key={index}>
                        {item.name}
                    </Label>
                );
            });
            break;
        case 'businessModel':
            List = productData.businessModels.map((item, index) => {
                return (
                    <Label removeTag={removeTag} tagId={item.id} tagType={'businessModelData'} type={'edit'} key={index}>
                        {item.name}
                    </Label>
                );
            });
            break;
        case 'investmentEffort':
            List = [
                <Label noClose={true} removeTag={removeTag} type={'edit'} tagType={'investmentEffortData'} key={uuidV4()}>
                    {productData.investmentEffort}
                </Label>
            ];
            break;
        case 'trl':
            List = [
                <div key={uuidV4()} className={'flex  flex-col space-y-[1rem] rounded-2xl bg-[#E5E7EB] text-[0.8em] text-[#6B7280]'}>
                    <div className={'flex space-x-2 px-[0.8rem] py-[0.4rem]'}>
                        <p>{productData.trl.name}</p>

                        <div
                            onClick={() => setShowDropdown(!showDropdown)}
                            className={
                                'inline-flex h-[2rem] w-fit cursor-pointer  items-center justify-center rounded-full bg-gray-300 p-1 transition-colors duration-300 hover:bg-gray-100 active:bg-gray-200'
                            }
                        >
                            <SlArrowDown className={'text-gray-400'} />
                        </div>
                    </div>
                    <div>{showDropdown ? <TRLList selectTRL={setTRL} /> : null}</div>
                </div>
            ];
            break;
    }

    return (
        <>
            <div className={'flex flex-wrap gap-2 space-x-1'}>
                {List?.length ? List : null}

                {showInput && (
                    <div className={''}>
                        <input
                            name={'tag'}
                            id={'tag'}
                            value={tagForm.values.tag}
                            onChange={tagForm.handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder={placeholder}
                            className={'rounded-md border p-1 text-[0.8em] placeholder:text-[0.8em] focus:outline-none'}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default TagInput;
