import { trlType } from '@/types/types';
import { getTrlData } from '@/pages/api/product';
import { useEffect, useMemo, useState } from 'react';

interface ITRLListProps {
    selectTRL: (trl: trlType) => void;
}

export const TRLList = ({ selectTRL }: ITRLListProps) => {
    const [trl, setTrl] = useState<trlType[]>([]);

    // Get TRLs from backend
    const fetchTrls = async () => {
        const data = await getTrlData();

        if (data.length) {
            setTrl(data);
        }
    };

    useEffect(() => {
        fetchTrls();
    }, []);

    // Memoize the trl data
    const memoizedTrl = useMemo(() => trl, [trl]);

    return (
        <>
            <div className={'mb-[1rem] flex flex-col'}>
                {memoizedTrl.map((item, index) => {
                    return (
                        <div
                            onClick={() => selectTRL({ id: item.id, name: item.name })}
                            key={index}
                            className={
                                'flex cursor-pointer flex-col space-y-2 bg-[#E5E7EB] px-[0.8rem] py-2 text-[0.9em] text-[#6B7280] transition-colors duration-300 hover:bg-gray-100 active:bg-gray-200'
                            }
                        >
                            <p>{item.name}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
