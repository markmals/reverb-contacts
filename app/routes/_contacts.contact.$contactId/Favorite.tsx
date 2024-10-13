"use client";

import { actions } from "./_actions";
import { useFormStatus } from "react-dom";
import { useEffect, useOptimistic } from "react";

export function Favorite({ id, favorite: initialFavorite }: { id: number; favorite: boolean }) {
    const { data } = useFormStatus();
    const [favorite, setFavorite] = useOptimistic(initialFavorite);

    useEffect(() => {
        if (data) setFavorite(data.get("favorite") === "true");
    }, [data]);

    return (
        <form action={actions.favorite}>
            <input type="hidden" name="id" value={id} />
            <button
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                name="favorite"
                value={favorite ? "false" : "true"}
            >
                {favorite ? "★" : "☆"}
            </button>
        </form>
    );
}
