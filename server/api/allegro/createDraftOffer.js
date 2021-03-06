export function createDraftOffer(params) {
  const {
    name,
    stock,
    description,
    images,
    additionalServices,
    afterSalesServices,
    attachments,
    category,
    compatibilityList,
    contact,
    createdAt,
    delivery,
    ean,
    external,
    id,
    location,
    parameters,
    payments,
    product,
    promotion,
    publication,
    sellingMode,
    sizeTable,
    tecdocSpecification,
    updatedAt,
    validation
  } = params;
  return {
    additionalServices,
    afterSalesServices,
    attachments,
    category,
    compatibilityList,
    contact,
    createdAt,
    delivery,
    description,
    ean,
    external,
    id,
    images,
    location,
    name,
    parameters,
    payments,
    product,
    promotion,
    publication,
    sellingMode,
    sizeTable,
    stock,
    tecdocSpecification,
    updatedAt,
    validation
  };
}
