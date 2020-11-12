/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-12 22:04:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-12 23:06:34
 */

import { useState, useEffect } from 'react';

import { data } from './data'

const useFetchData = (url: string, page: number, pageSize: number) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<any>()
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            if (isLoading) return
            setIsLoading(true)
            try {
                setTimeout(() => {
                    let res = data // 模拟ajax
                    setResponse(res);
                    setIsLoading(false)

                    // setError(true);
                }, 1000);
            } catch (error) {
                setError(true);
                setIsLoading(false)
            }
        };

        fetchData();
    }, [page, pageSize]);

    return { response, isLoading, error };
};

export { useFetchData }
