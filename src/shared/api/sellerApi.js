import { $authHost } from "."

export const handleSellerTransactionAdd=async(amount,productId)=>{
    const {data}=await $authHost.post("/api/seller/transaction/add",{amount,productId})
    return data
}
export const handleSellerTransactionBuyId=async(id)=>{
    const {data}=await $authHost.patch("api/seller/transaction/buy/"+id);
    return data
}