import { apiUrl, authorizationTokenHeader } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const res = await fetch(`${apiUrl}/installations`, {
		method: 'GET',
		headers: authorizationTokenHeader()
	});

	if (res.ok) {
		const body = await res.json();
		return {
			rows: body.data
		};
	}

	if (res.status === 400) {
		// TODO: Client error.
	}

	if (res.status === 401) {
		// TODO: Provided invalid login.
	}

	// TODO: Server error.

	return {};
};
