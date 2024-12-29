

"use client"

import { ResultFilterTypes } from "@/types/filters"
import { useEffect, useState } from "react"




export function useGetProductsFields() {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`

    const [result, setResult] = useState<ResultFilterTypes | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    useEffect(()=>{
        (async () => {
            try {
                const res = await fetch(url)
                const data =  await res.json()
                setResult(data.data)
                setLoading(false)
            } catch (error: any) {
                setError(error)
            }
        })()
    },[url])


    return {result, loading, error}

}