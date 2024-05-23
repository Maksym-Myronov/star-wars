'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	people: [],
	status: 'idle',
	error: null
};

export const fetchPeopleFromApi = createAsyncThunk(
	'people/fetchPeopleFromApi',
	async () => {
		const response = await fetch(`https://sw-api.starnavi.io/people`);

		return response.json();
	}
);

const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPeopleFromApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPeopleFromApi.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.people = action.payload;
				state.error = null;
			})
			.addCase(fetchPeopleFromApi.rejected, (state) => {
				state.status = 'rejected';
			});
	}
});

export default peopleSlice.reducer;
