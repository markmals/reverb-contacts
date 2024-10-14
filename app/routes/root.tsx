import styles from "./index.css?url";
import { RouteArgs } from "react-router/reverb";
import { Scripts, ScrollRestoration } from "react-router";

export async function route({ children }: RouteArgs) {
    return (
        <html lang="en">
            <head>
                <title>Reverb Contacts</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href={styles} />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
