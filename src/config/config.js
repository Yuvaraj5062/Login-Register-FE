// export const BASE_URL = "https://wcmbe-qa.archesoftronix.in/api/"; //QA
// export const BASE_URL = "https://wcmbe-dev.archesoftronix.in/api/"; //DEV
//  export const BASE_URL = "https://wcmbe-uat.archesoftronix.in/api/"; //UAT
export const BASE_URL ="http://192.168.1.126:24112/api/" //demo

export default {
  default: {
    // login
    baseUrl: BASE_URL,
    getAllProduct:BASE_URL+"Product/GetAllProduct",
    addProduct:BASE_URL+"Product/AddProduct",

  },
};
