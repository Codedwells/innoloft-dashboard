import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppConfigState {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}

const initialAppConfigState: IAppConfigState = {
    id: 0,
    logo: '',
    mainColor: '',
    hasUserSection: false
};

const appConfigSlice = createSlice({
    name: 'appConfigState',
    initialState: initialAppConfigState,
    reducers: {
        setAppConfig(state, action: PayloadAction<IAppConfigState>) {
            state.id = action.payload.id;
            state.logo = action.payload.logo;
            state.mainColor = action.payload.mainColor;
            state.hasUserSection = action.payload.hasUserSection;
        }
    }
});

export const { setAppConfig } = appConfigSlice.actions;
export default appConfigSlice;
