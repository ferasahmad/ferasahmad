
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/file.svg" | "/fonts/Jersey25-Regular.ttf" | "/globe.svg" | "/images/.DS_Store" | "/images/about-section/main.png" | "/images/contact-section/boats-2.jpg" | "/images/contact-section/boats.jpg" | "/images/contact-section/sunset-2.jpg" | "/images/contact-section/sunset.jpg" | "/images/hero-section/ferasahmad.png" | "/images/hero-section/sea.png" | "/images/optimized/about-section/main-1200.avif" | "/images/optimized/about-section/main-1200.webp" | "/images/optimized/about-section/main-1600.avif" | "/images/optimized/about-section/main-1600.webp" | "/images/optimized/about-section/main-600.avif" | "/images/optimized/about-section/main-600.webp" | "/images/optimized/about-section/main-900.avif" | "/images/optimized/about-section/main-900.webp" | "/images/optimized/contact-section/boats-2-1280.avif" | "/images/optimized/contact-section/boats-2-1280.webp" | "/images/optimized/contact-section/boats-2-1600.avif" | "/images/optimized/contact-section/boats-2-1600.webp" | "/images/optimized/contact-section/boats-2-1920.avif" | "/images/optimized/contact-section/boats-2-1920.webp" | "/images/optimized/contact-section/boats-2-640.avif" | "/images/optimized/contact-section/boats-2-640.webp" | "/images/optimized/contact-section/boats-2-960.avif" | "/images/optimized/contact-section/boats-2-960.webp" | "/images/optimized/hero-section/ferasahmad-300.avif" | "/images/optimized/hero-section/ferasahmad-300.webp" | "/images/optimized/hero-section/ferasahmad-450.avif" | "/images/optimized/hero-section/ferasahmad-450.webp" | "/images/optimized/hero-section/ferasahmad-600.avif" | "/images/optimized/hero-section/ferasahmad-600.webp" | "/images/optimized/hero-section/ferasahmad-900.avif" | "/images/optimized/hero-section/ferasahmad-900.webp" | "/images/optimized/hero-section/sea-1280.avif" | "/images/optimized/hero-section/sea-1280.webp" | "/images/optimized/hero-section/sea-1600.avif" | "/images/optimized/hero-section/sea-1600.webp" | "/images/optimized/hero-section/sea-1920.avif" | "/images/optimized/hero-section/sea-1920.webp" | "/images/optimized/hero-section/sea-640.avif" | "/images/optimized/hero-section/sea-640.webp" | "/images/optimized/hero-section/sea-960.avif" | "/images/optimized/hero-section/sea-960.webp" | "/next.svg" | "/vercel.svg" | "/window.svg" | string & {};
	}
}