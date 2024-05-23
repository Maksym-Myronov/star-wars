import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '@/app/lib/features/people/peopleSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			people: peopleReducer
		}
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
