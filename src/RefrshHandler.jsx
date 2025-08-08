import { useEffect } from 'react';

const RefrshHandler = ({ setIsAuthenticated }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    // You can optionally verify token with backend here
    setIsAuthenticated(!!token);
  }, [setIsAuthenticated]);

  return null;
};

export default RefrshHandler;
