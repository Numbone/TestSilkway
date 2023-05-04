import { $authHost } from "."

export const handleProviderProductsCreate=async(FormData)=>{
    const {data}=await  $authHost.post('api/provider/products/create',FormData)
    return data
}
export const handleProviderProductsUser=async()=>{
    const data=await $authHost.get('api/provider/products/user')
    return data
}