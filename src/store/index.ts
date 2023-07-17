import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/store/product.slice';
import appConfigSlice from '@/store/appConfig.slice';

const store = configureStore({
    reducer: {
        productState: productSlice.reducer,
        appConfigState: appConfigSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
