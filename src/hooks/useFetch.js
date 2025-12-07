import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants/api';

export const useFetch = (url, initialData = null, options = {}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url || url.includes('null') || url.includes('undefined')) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // URL이 절대 경로가 아니면 API_BASE_URL 추가
        const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
        
        // 토큰 가져오기
        const token = localStorage.getItem('authToken');
        
        const defaultHeaders = {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` }),
        };
        
        const fetchOptions = {
          headers: { ...defaultHeaders, ...options.headers },
          ...options,
        };
        
        const response = await fetch(fullUrl, fetchOptions);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (Array.isArray(result) && result.length > 0) {
          setData(result[0]);
        } else {
          setData(result);
        }
      } catch (err) {
        console.error('Data fetching failed:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, setData };
};
