import { $authHost } from "."

export const handleItemId=async(id)=>{
    const {data}=await $authHost.get('products'+id)
    return data
}
export const handleItemAll= async()=>{
    const {data}=await $authHost.get('/products/all')
    return data
}