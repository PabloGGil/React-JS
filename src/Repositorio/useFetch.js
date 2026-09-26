// Repositorio/useFetch.js
import { useEffect, useState } from 'react';
import { fetchData } from './api';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        fetchData({url})
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setCargando(false));
    }, [url]);

    return { data, error, cargando };
}