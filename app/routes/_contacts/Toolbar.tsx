"use client";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { actions } from "./_actions";

export function Toolbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q") ?? undefined;
    const searching = !!q;

    useEffect(() => {
        if (document) {
            document.querySelector<HTMLInputElement>("#q")!.value = q ?? "";
        }
    }, [q]);

    return (
        <>
            <form id="search-form" role="search" method="get">
                <input
                    aria-label="Search contacts"
                    className={searching ? "loading" : ""}
                    value={q}
                    id="q"
                    name="q"
                    onChange={event => {
                        // Remove empty query params when value is empty
                        if (!event.currentTarget) {
                            navigate("/");
                            return;
                        }

                        // This will perform a GET CSR navigation to the same URL with
                        // the query params from the serialized form (e.g. /?q=foo)
                        //
                        // TODO: Maybe there should be a Reverb hook for this 🤔
                        const isFirstSearch = q === null;
                        const formData = new FormData(event.currentTarget.form!);
                        const searchParams = new URLSearchParams(
                            formData as unknown as Record<string, string>
                        ).toString();
                        navigate(`/?${searchParams}`, { replace: !isFirstSearch });
                    }}
                    placeholder="Search"
                    type="search"
                />
                <div aria-hidden hidden={!searching} id="search-spinner" />
                <div aria-live="polite" className="sr-only"></div>
            </form>
            <form action={actions.create}>
                <button type="submit">New</button>
            </form>
        </>
    );
}
