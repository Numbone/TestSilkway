import { $authHost } from "."

export const getTransaction=async(role)=>{
    const {data}=await $authHost(`api/${role}/transaction/`)
    return data
}