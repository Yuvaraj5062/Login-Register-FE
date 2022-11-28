import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, clearState, getAllProduct } from '../../redux/features/demo/demoSlice'

const DemoApp = () => {
    const dispatch = useDispatch()
    const [filterBy,setFilterBy]=useState()
    const [data,setData]=useState([])
    let calculation=[]
    const { productList,loading } = useSelector((state) => state.demo);
    useEffect(()=>{
dispatch(getAllProduct()).then((res)=>{
  
  if(res?.type === 'demo/getAllProduct/fulfilled'){
    setData(res?.payload?.data)
    calculation=res?.payload?.data
  }

})
    },[])
    // console.log("data",loading,productList?.data)
    // const handleClick=()=>{
        
    //     console.log("aaa",filterFun())
    // }
// const filterFun=()=>{
//   return data.filter((item)=>{return item.productName === filterBy })
// }
 calculation =useMemo(()=>
 {return data.filter((item)=>{return item.productName === filterBy })},[filterBy])
// setData(calculation)
  return (
    <div>
      <div>
        <input type="text" name="filterBy" onChange={(e)=>setFilterBy(e.target.value)}></input>
      </div>
      <div>
        {/* <button onClick={()=>handleClick()}> add</button> */}
        </div>
        {/* {calculation} */}
        {calculation?.length>0?
        calculation.map((item,index)=>{
          return(<div key={index}>{item?.productName}</div>)
        }):
        data.map((item,index)=>{
          return(<div key={index}>{item?.productName}</div>)
        })
      }
    </div>
  )
}

export default DemoApp