import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store'; // Assuming you have a store file

// Use this custom dispatch in your component instead of the regular dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
