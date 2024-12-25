import { Suspense } from "react";
import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://creator-vpn.net"), 
    title: "Creator VPN",
    description: "🌐 Creator VPN — это свобода интернета и ваш ключ к созданию собственного VPN-бизнеса в Telegram.",
    openGraph: {
        title: "Создайте VPN-бота и зарабатывайте на трафике",
        description: "🌐 Creator VPN — это свобода интернета и ваш ключ к созданию собственного VPN-бизнеса в Telegram.",
        url: "https://creator-vpn.net",
        images: [
            {
                url: "/icon.png",
                width: 1200,
                height: 630,
                alt: "Иконка сайта",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='ru' suppressHydrationWarning>
            <head>
                <link rel="icon" href="/icon.png" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:description" content={metadata.openGraph.description} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:type" content={metadata.openGraph.type} />
                <meta
                    property="og:image"
                    content={metadata.openGraph.images[0].url}
                />
                <title>{metadata.title}</title>
            </head>
            <body>
                <Suspense>
                    {children}
                </Suspense>
            </body>
        </html>
    );
}
