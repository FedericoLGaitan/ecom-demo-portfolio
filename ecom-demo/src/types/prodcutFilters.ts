export type productFilters = {
  apiID: string;
  schema: {
    draftAndPublish: true;
    displayName: string;
    singularName: string;
    pluralName: string;
    description: string;
    pluginOptions: any;
    kind: string;
    collectionName: string;
    attributes: {
      productName: {
        type: string;
      };
      slug: {
        type: string;
        targetField: string;
      };
      description: {
        type: string;
      };
      images: {
        type: string;
        multiple: true;
        required: false;
        private: false;
        allowedTypes: string[];
      };
      active: {
        type: boolean
        default: true;
      };
      price: {
        type: string;
      };
      productStatus: {
        type: string;
        enum: string[];
      };
      productBrand: {
        type: string;
        enum: string[];
      };
      isFeatured: {
        type: boolean;
      };
    };
  };
};
