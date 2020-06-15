import * as productConstants from './../constants/product';


export const fetchListProduct = (params = {}, page) => {
  return {
    type: productConstants.FETCH_PRODUCT,
    payload: {
      params,
      page,
    },
  };
};

export const fetchListProductSuccess = data => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListProductFailed = error => {
  return {
    type: productConstants.FETCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
////////////////////////////////////////////////////////////// add
export const addProduct = (name, description, price) => {
  return {
    type: productConstants.ADD_PRODUCT,
    payload: {
      name,
      description,
      price,
    },
  };
};

export const addProductSuccess = data => {
  return {
    type: productConstants.ADD_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addProductFailed = error => {
  return {
    type: productConstants.ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};


export const setProductEditing = product => {
  return {
    type: productConstants.SET_PRODUCT_EDITING,
    payload: {
      product,
    },
  };
};

//////////////////////////////////////////////////////////////// update
export const updateProduct = (name, description, price) => {
  return {
    type: productConstants.UPDATE_PRODUCT,
    payload: {
      name,
      description,
      price,
    },
  };
};


export const updateProductSuccess = data => {
  return {
    type: productConstants.UPDATE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateProductFailed = error => {
  return {
    type: productConstants.UPDATE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};

/////////////////////////////////////////////////////////delete

export const deleteProduct = (ID) => {
  return {
    type: productConstants.DELETE_PRODUCT,
    payload: {
      ID
    },
  };
};


export const deleteProductSuccess = data => {
  return {
    type: productConstants.DELETE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProductFailed = error => {
  return {
    type: productConstants.DELETE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};


///////////////////////////////////////////////////////////

export const filterProduct = (keyword) => {
  console.log('acction dc goi', keyword)
  return {
    type: productConstants.FILTER_PRODUCT,
    payload: {
      keyword,
    },
  };
};

export const filterProductSuccess = (data) => {
  return {
    type: productConstants.FILTER_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

/////////////////////////////////////////////////////

export const setViewProduct = (product) => {
  return {
    type: productConstants.SET_PRODUCT_EDITING,
    payload: {
      product
    },
  };
};

////////////////////////////////////////////////////////
export const getProductById = ID => {
  return {
    type: productConstants.GET_PRODUCT_BY_ID,
    payload: {
      ID,
    },
  };
};

export const getProductByIdSuccess = data => {
  return {
    type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getProductByIdFailed = error => {
  return {
    type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
    payload: {
      error,
    },
  };
};




export const setPage = page => {
  return {
    type: productConstants.SET_PAGE,
    payload: {
      page,
    },
  };
};
