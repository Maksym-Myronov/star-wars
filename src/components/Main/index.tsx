'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useLib';
import { fetchPeopleFromApi } from '@/app/lib/features/people/peopleSlice';

export const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const people = useAppSelector((state) => state.people);

	console.log(people);

	useEffect(() => {
		dispatch(fetchPeopleFromApi());
	}, [dispatch]);

	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
};
