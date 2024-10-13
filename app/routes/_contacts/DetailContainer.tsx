"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useNavigation } from "react-router";

export function DetailContainer({ children }: PropsWithChildren) {
    const navigation = useNavigation();

    return (
        <div className={clsx({ loading: navigation.state === "loading" })} id="detail">
            {children}
        </div>
    );
}
