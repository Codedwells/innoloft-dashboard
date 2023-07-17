export type TRLType = {
    id: number;
    name: string;
    description: string;
};

export type categoriesType = { id: number; name: string }[];

export type businessModelsType = { id: number; name: string }[];

export type investmentEffortType = string;

export type trlType = { id: number; name: string };

export interface IProductData {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: {
        id: number;
        name: string;
    };
    categories: categoriesType;
    implementationEffortText: string;
    trl: trlType;
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        sex: number;
        profilePicture: string;
        position: string;
    };
    company: {
        name: string;
        logo: string;
        address: {
            country: {
                name: string;
            };
            city: {
                name: string;
            };
            street: string;
            house: string;
            zipCode: string;
            longitude: string;
            latitude: string;
        };
    };
    video: string;
    businessModels: businessModelsType;
    investmentEffort: investmentEffortType;
}
