import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

const inter=Inter({ subsets:["latin"]});
export const metadata:Metadata={
    title:"invoking Api's",
    description:"PIAIC BATCH-47 Q-2",
};
export default function RootLayout({
    childern,
 }: Readonly<{
    childern: React.ReactNode;
}>)
{
    return(
        <html lang="eng">
            <body className={inter.className}>
                <nav className="p-5 bg-blue-500 flex justify-centre items-center gap-10">
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/name"}>Name</Link>
                    <Link href={"/step02_fetching"}>Step 02</Link>
                    <Link href={"/step02_fetching_revalidate"}>Step 02 Revalidate</Link>
                    <Link href={"/step03_dynamic"}>Step 03</Link>
                </nav>
{childern}
            </body>
        </html>
    );
};