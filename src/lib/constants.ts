const contentTypeJsonHeader = {
	'Content-Type': 'application/json; charset=UTF-8'
};

const authorizationTokenHeader = () => {
	return {
		Authorization: `Token ${localStorage.getItem(authTokenName) ?? ''}`
	};
};

export { contentTypeJsonHeader, authorizationTokenHeader };

const apiUrl = 'http://localhost:1239';

export { apiUrl };

const authTokenName = 'token';

export { authTokenName };
