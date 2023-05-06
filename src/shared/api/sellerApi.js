import { $authHost } from "."

export const handleSellerTransactionAdd=async(amount,productId)=>{
    const {data}=await $authHost.post("/api/seller/transaction/add",{amount,productId})
    return data
}
export const handleSellerTransactionBuyId=async(id)=>{
    const {data}=await $authHost.patch("api/seller/transaction/buy/"+id);
    return data
}
export const handleSellerTransactionMinus=async(transactionId,productId)=>{
    const {data}=await $authHost.patch("api/seller/transaction/minus/"+transactionId+"/"+productId)
    return data
}
export const handleSellerTransactionPlus=async(transactionId,productId)=>{
    const {data}=await $authHost.patch("api/seller/transaction/plus/"+transactionId+"/"+productId)
    return data
}
export const handleSellerTransactionAccept=async(id)=>{
    const {data}=await $authHost.patch("api/seller/transaction/accept/"+id)
    return  data
}
export const handleSellerTransactionBuy=async(id)=>{
    const {data}=await $authHost.patch("api/seller/transaction/buy/"+id)
    return data
}
