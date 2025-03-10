// 'use client'

// import { createTheme } from "@mui/material";

// declare module '@mui/material/styles' {
// 	interface TypeBackground {
// 		cards: {
// 			[key: number]: string
// 		};
// 	}
// }

// const responsiveFontSize = (minFontSize: number, maxFontSize: number, minWidth: number = 375, maxWidth: number = 1920) => {
// 	return `clamp(${minFontSize}px, calc(${minFontSize}px + (${maxFontSize - minFontSize}) * ((100vw - ${minWidth}px) / (${maxWidth - minWidth}))), ${maxFontSize}px)`;
// };



// const theme = createTheme({
// 	typography: {
// 		fontSize: 16,
// 		fontFamily: 'var(--font-manrope)',
// 		h1: {
// 			fontSize: responsiveFontSize(45, 140),
// 			lineHeight: responsiveFontSize(55, 140),
// 			fontFamily: 'var(--font-brewery)',
// 		},
// 		h2: {
// 			fontSize: responsiveFontSize(35, 70),
// 			lineHeight: responsiveFontSize(45, 70),
// 			fontFamily: 'var(--font-brewery)',
// 		}
// 	},
// 	palette: {
// 		background: {
// 			default: '#000000',
// 			cards: {
// 				0: '#0d0d0d',
// 				1: '#141414',
// 				2: '#1f1f1f',
// 				3: '#292929',
// 				4: '#333333',
// 			},

// 		},
// 		divider: 'rgba(255, 255, 255, 0.12)',
// 		text: {
// 			primary: '#fff',
// 		}
// 	}
// });

// export default theme;