import styles from "./index.css?url";
import { MetaFunction, RouteComponentProps } from "react-router/reverb";
import { Links, LinksFunction, Meta, Scripts, ScrollRestoration } from "react-router";

export const meta: MetaFunction = () => [
    { charSet: "utf-8" },
    { title: "Reverb Contacts" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
];

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
];

export default function App({ children }: RouteComponentProps) {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
