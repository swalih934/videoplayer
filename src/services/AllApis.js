import axios from "axios";
 const base_url="https://videoplayer2025.onrender.com"
export const Addvideo=async(data)=>{
    return await axios.post(`${base_url}/videos`,data)
}

export const getData=async()=>{
    return await axios.get(`${base_url}/videos`)
}
export const deleteVideo=async(id)=>{
    return await axios.delete(`${base_url}/${id}`)
}

export const Addcategory=async(data)=>{
    return await axios.post(`${base_url}/category`,data)
}

export const getCategory=async ()=>{
    return await axios.get(`${base_url}/category`)
}

export const deleteCategory=async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}
export const addHistory=async(data)=>{
    return await axios.post(`${base_url}/history`,data)
}

export const getHistory=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const delHistory=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}

export const checkEmail=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const registerApi=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}

export const loginApi=async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}