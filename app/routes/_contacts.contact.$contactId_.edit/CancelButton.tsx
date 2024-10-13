"use client";

import { PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export function CancelButton({ children }: PropsWithChildren) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} type="button">
            {children}
        </button>
    );
}
