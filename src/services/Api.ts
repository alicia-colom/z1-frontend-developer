// TODO: cambiar el type de userData al mismo de la foto

export const connectToApi = (userData: string) => {
	return fetch('https://front-exercise.z1.digital/evaluations', {
		method: 'POST',
		body: JSON.stringify(userData),
		headers: { 'content-type': 'application/json' },
	}).then((resp) => resp.json());
};
