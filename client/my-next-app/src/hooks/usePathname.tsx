import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname
export const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}