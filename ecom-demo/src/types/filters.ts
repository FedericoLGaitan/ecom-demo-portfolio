export type FilterTypes = { 
    result: ResultFilterTypes | null;
    error: string;
    loading: boolean;
}

export type ResultFilterTypes = {  
    schema: {
        attributes: {
            productBrand: {
                enum: any;
            }
        }
    }
}