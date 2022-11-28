import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductCrud, getProductData } from "./demoCrud";

export const getAllProduct = createAsyncThunk(
  "demo/getAllProduct",
  async (payload, { rejectWithValue }) => {
    console.log(payload, "profile");
    try {
      const res = await getProductData(payload);
      console.log("res",res)
      if (res.status) {
        return res.data;
      } else {
        console.log("err")
        throw new Error(res.message);
      }
    } 
    catch (error) {
      console.log("err")
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "demo/addProduct",
  async (payload, {dispatch, rejectWithValue }) => {
    try {
      const res = await addProductCrud(payload);

      if (res.status) {
        console.log(res.data, "dataaaaa1111");
        dispatch(getAllProduct())

        return res.data;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const demoSlice = createSlice({
  name: "demo",
  initialState: {
    loading: false,
    productList: [],
  },
  reducers: {
    clearState: (state, action) => {
      state.productList = [];
    },
  },
  extraReducers: {
    /* 
    getiing client profile from server 
    */
    [getAllProduct.pending]: (state) => {
      state.loading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    [getAllProduct.rejected]: (state, error) => {
      state.loading = false;
    },

    /* 
    add product
    */
    [addProduct.pending]: (state) => {
      state.loading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    [addProduct.rejected]: (state, error) => {
      state.loading = false;
    },
  },
});

export const { clearState } = demoSlice.actions;
export default demoSlice.reducer;







