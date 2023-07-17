import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { businessModelsType, categoriesType, IProductData, trlType } from '@/types/types';
import { possibleTypes } from '@/components/TagInput';

const initialProductState: IProductData = {
    id: 0,
    name: '',
    description: '',
    picture: '',
    type: {
        id: 0,
        name: ''
    },
    categories: [
        {
            id: 0,
            name: ''
        },
        {
            id: 0,
            name: ''
        }
    ],
    implementationEffortText: '',
    investmentEffort: '',
    trl: {
        id: 0,
        name: ''
    },
    video: '',
    user: {
        id: 0,
        email: '',
        firstName: '',
        lastName: '',
        sex: 0,
        profilePicture: '',
        position: ''
    },
    company: {
        name: '',
        logo: '',
        address: {
            country: {
                name: ''
            },
            city: {
                name: ''
            },
            street: '',
            house: '',
            zipCode: '',
            longitude: '',
            latitude: ''
        }
    },
    businessModels: [
        {
            id: 0,
            name: ''
        },
        {
            id: 0,
            name: ''
        },
        {
            id: 0,
            name: ''
        },
        {
            id: 0,
            name: ''
        }
    ]
};

interface IProductTagDetails {
    categories: categoriesType;
    businessModels: businessModelsType;
    investmentEffort: string;
    trl: trlType;
}

interface IMainDetails {
    description: string;
    name: string;
}

const productSlice = createSlice({
    name: 'productState',
    initialState: initialProductState,
    reducers: {
        setProduct(state, action: PayloadAction<IProductData>) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.picture = action.payload.picture;
            state.type = action.payload.type;
            state.categories = action.payload.categories;
            state.implementationEffortText = action.payload.implementationEffortText;
            state.trl = action.payload.trl;
            state.user = action.payload.user;
            state.company = action.payload.company;
            state.businessModels = action.payload.businessModels;
            state.investmentEffort = action.payload.investmentEffort;
            state.video = action.payload.video;
        },
        setMainDetails(state, action: PayloadAction<IMainDetails>) {
            state.description = action.payload.description;
            state.name = action.payload.name;
        },
        setVideo(state, action: PayloadAction<string>) {
            state.video = action.payload;
        },
        addBusinessModel(state, action: PayloadAction<{ id: number; name: string }>) {
            let newBusinessModel = [...state.businessModels, action.payload];
            state.businessModels = newBusinessModel;
        },
        addCategory(state, action: PayloadAction<{ id: number; name: string }>) {
            let newCategory = [...state.categories, action.payload];
            state.categories = newCategory;
        },
        removeCategory(state, action: PayloadAction<{ id: number }>) {
            let newCategory = state.categories.filter((item) => item.id !== action.payload.id);
            state.categories = newCategory;
        },
        removeBusinessModel(state, action: PayloadAction<{ id: number }>) {
            let newBusinessModel = state.businessModels.filter((item) => item.id !== action.payload.id);
            state.businessModels = newBusinessModel;
        },
        updateInvestmentEffort(state, action: PayloadAction<string>) {
            state.investmentEffort = action.payload;
        },
        updateTRL(state, action: PayloadAction<trlType>) {
            state.trl = action.payload;
        }
    }
});

export const { setProduct, setVideo, setMainDetails, addCategory, addBusinessModel, removeCategory, removeBusinessModel, updateInvestmentEffort, updateTRL } = productSlice.actions;
export default productSlice;
