import { IProductData } from '@/types/types';

const BASE_URL = `https://api-test.innoloft.com`;

// Gets all products
export const getProducts = async ({ productId }: { productId: number }) => {
    try {
        const response = await fetch(`${BASE_URL}/product/${productId}/`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

// Gets trl data
export const getTrlData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/trl/`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

// Gets app configuration
export const getConfigData = async ({ APP_ID }: { APP_ID: number }) => {
    try {
        const response = await fetch(`${BASE_URL}/configuration/${APP_ID}/`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

//Updates a product
export const updateProduct = async ({ productId, productData }: { productId: number; productData: IProductData }) => {
    try {
        const response = await fetch(`${BASE_URL}/product/${productId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
