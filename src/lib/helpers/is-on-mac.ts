import { browser } from '$app/environment';

export const isOsMac = () => {
	if (browser) {
		let os = navigator.userAgent;
		return os.search('Mac') !== -1;
	}

	return false;
};
