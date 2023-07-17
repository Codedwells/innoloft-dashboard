import { v4 as uuidV4 } from 'uuid';
import { Label } from '@/components/Label';
import { businessModelsType, categoriesType, investmentEffortType, trlType } from '@/types/types';

interface ITechnologyListProps {
    type: 'technology' | 'businessModel' | 'investmentEffort' | 'trl';
    categoryData?: categoriesType;
    businessModelData?: businessModelsType;
    investmentEffortData?: investmentEffortType;
    trlData?: trlType;
}

export const OfferDetailsList = ({ type, categoryData, businessModelData, investmentEffortData, trlData }: ITechnologyListProps) => {
    let List: React.JSX.Element[] | null = null;

    switch (type) {
        case 'technology':
            if (!categoryData) return null;
            List = categoryData?.map((item, index) => {
                return <Label key={index}>{item.name}</Label>;
            });
            break;
        case 'businessModel':
            if (!businessModelData) return null;
            List = businessModelData?.map((item, index) => {
                return <Label key={index}>{item.name}</Label>;
            });
            break;
        case 'investmentEffort':
            if (!investmentEffortData) return null;
            List = [<Label key={uuidV4()}>{investmentEffortData}</Label>];
            break;
        case 'trl':
            if (!trlData) return null;
            List = [<Label key={uuidV4()}>{trlData.name}</Label>];
            break;
        default:
            break;
    }

    return <div className={'flex flex-wrap gap-2 space-x-1'}>{List}</div>;
};
