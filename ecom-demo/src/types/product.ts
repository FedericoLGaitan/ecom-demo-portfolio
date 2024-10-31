export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    productStatus: string;
    productBrand: string;
    price: number;
    images: 
        {
        id: number;
        url: string;
      }[];
    };
