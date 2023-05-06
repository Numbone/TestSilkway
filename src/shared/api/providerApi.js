import { $authHost } from "."

export const handleProviderProductsCreate=async(FormData)=>{
    const {data}=await  $authHost.post('api/provider/products/create',FormData)
    return data
}
export const handleProviderProductsUser=async()=>{
    const {data}=await $authHost.get('api/provider/products/user')
    return data
}   
export const handleProviderTransactionAccept=async(id)=>{
    const {data}=await $authHost.patch("api/provider/transaction/accept/"+id)
    return data
}
export const handleProviderTransactionCancel=async(id)=>{
    const {data}=await $authHost.patch("api/provider/transaction/cancel/"+id)
    return data
}
export const handleProviderTransactionConfirm=async(id)=>{
    const {data}=await $authHost.patch("api/provider/transaction/confirm/"+id)
    return data
}