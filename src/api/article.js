// import axios from 'axios'

// const baseURL = 'http://localhost:8080'

// const instance = axios.create({baseURL})

import request from '@/util/request.js'

// export async function articleGetAllService(){
//     return await instance.get('/article/getAll')
//     .then(result=>{
//         return result.data
//     }).catch(err=>{
//         console.log(err)
//     })
// }


// export async function articleSearchService(condition){
//     return await instance.get("/article/search",{params:condition})
//     .then(result=>{
//         return result.data
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }

export function articleGetAllService(){
    return request.get('/article/getAll')

}


export function articleSearchService(condition){
    return request.get("/article/search",{params:condition})

}