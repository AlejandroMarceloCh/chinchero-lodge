import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Mesa Alta — A lodge and bar in Chinchero',description:'Six cabins, one long table, 3,754 metres up. Opening in Chinchero, Peru.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
