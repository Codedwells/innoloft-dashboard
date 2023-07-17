import { RxCross2 } from 'react-icons/rx';
import { possibleTypes } from '@/components/TagInput';

interface LabelProps {
    children: React.ReactNode;
    tagId?: number;
    noClose?: boolean;
    type?: 'view' | 'edit';
    tagType?: possibleTypes;
    removeTag?: ({ id, tagType }: { id: number; tagType: possibleTypes }) => void;
}

export const Label = ({ children, noClose = false, tagType, tagId, removeTag, type = 'view' }: LabelProps) => {
    return (
        <>
            <div className={'flex justify-between space-x-3 rounded-2xl bg-[#E5E7EB] px-[0.8rem] py-[0.4rem] text-[0.8em] text-[#6B7280]'}>
                <p>{children}</p>
                {type == 'edit' && !noClose ? (
                    <div
                        onClick={removeTag ? () => removeTag({ id: tagId!, tagType: tagType! }) : () => null}
                        className={'inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-gray-300 p-1 transition-colors duration-300 hover:bg-gray-100 active:bg-gray-200'}
                    >
                        <RxCross2 className={'text-gray-400'} />
                    </div>
                ) : null}
            </div>
        </>
    );
};
