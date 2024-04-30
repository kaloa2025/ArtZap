import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://192.168.251.201:3000/api/products/');
            setData(response.data);
            console.log(data);
            setIsLoading(false)
        } catch (error) {
            console.error(error.message)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch};
};

export default useFetch;
