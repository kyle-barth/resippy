import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'resippy.vercel.app',
	appName: 'resippy',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
	// ios: {
	// 	contentInset: 'always',
	// }
};

export default config;
