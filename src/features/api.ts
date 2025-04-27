import { apiVersion } from '@/lib/consts';
import { EssayInput } from '@/types/card';

const apiBase = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

const apiFetch = (path: string, options?: RequestInit) => {
	return fetch(`${apiBase}${path}`, options);
};
export const analyzeEssay = async ({ question, essay }: EssayInput) => {
	const response = await apiFetch(`/api/${apiVersion}/analyze`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ question, essay }),
	});

	const data = await response.json();
	console.log('data', data);
	if (!response.ok) {
		const errorMessage = data?.detail || response.statusText;
		throw new Error(errorMessage);
	}

	return data;
};
