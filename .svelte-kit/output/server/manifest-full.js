export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["file.svg","fonts/Jersey25-Regular.ttf","globe.svg","images/.DS_Store","images/about-section/main.png","images/contact-section/boats-2.jpg","images/contact-section/boats.jpg","images/contact-section/sunset-2.jpg","images/contact-section/sunset.jpg","images/hero-section/ferasahmad.png","images/hero-section/sea.png","images/optimized/about-section/main-1200.avif","images/optimized/about-section/main-1200.webp","images/optimized/about-section/main-1600.avif","images/optimized/about-section/main-1600.webp","images/optimized/about-section/main-600.avif","images/optimized/about-section/main-600.webp","images/optimized/about-section/main-900.avif","images/optimized/about-section/main-900.webp","images/optimized/contact-section/boats-2-1280.avif","images/optimized/contact-section/boats-2-1280.webp","images/optimized/contact-section/boats-2-1600.avif","images/optimized/contact-section/boats-2-1600.webp","images/optimized/contact-section/boats-2-1920.avif","images/optimized/contact-section/boats-2-1920.webp","images/optimized/contact-section/boats-2-640.avif","images/optimized/contact-section/boats-2-640.webp","images/optimized/contact-section/boats-2-960.avif","images/optimized/contact-section/boats-2-960.webp","images/optimized/hero-section/ferasahmad-300.avif","images/optimized/hero-section/ferasahmad-300.webp","images/optimized/hero-section/ferasahmad-450.avif","images/optimized/hero-section/ferasahmad-450.webp","images/optimized/hero-section/ferasahmad-600.avif","images/optimized/hero-section/ferasahmad-600.webp","images/optimized/hero-section/ferasahmad-900.avif","images/optimized/hero-section/ferasahmad-900.webp","images/optimized/hero-section/sea-1280.avif","images/optimized/hero-section/sea-1280.webp","images/optimized/hero-section/sea-1600.avif","images/optimized/hero-section/sea-1600.webp","images/optimized/hero-section/sea-1920.avif","images/optimized/hero-section/sea-1920.webp","images/optimized/hero-section/sea-640.avif","images/optimized/hero-section/sea-640.webp","images/optimized/hero-section/sea-960.avif","images/optimized/hero-section/sea-960.webp","next.svg","vercel.svg","window.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".ttf":"font/ttf",".png":"image/png",".jpg":"image/jpeg",".avif":"image/avif",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.BIYHV0Bu.js",app:"_app/immutable/entry/app.CabVdWIU.js",imports:["_app/immutable/entry/start.BIYHV0Bu.js","_app/immutable/chunks/C8Ijta81.js","_app/immutable/chunks/BjL4d48L.js","_app/immutable/chunks/CyMtKL0B.js","_app/immutable/entry/app.CabVdWIU.js","_app/immutable/chunks/BjL4d48L.js","_app/immutable/chunks/BPCrh0zB.js","_app/immutable/chunks/pGZEPhZe.js","_app/immutable/chunks/CyMtKL0B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
