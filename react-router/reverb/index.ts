import type { PropsWithChildren } from "react";

export type RouteArgs = PropsWithChildren<{
    request: Request;
    // TODO: Plugin to make this type-safe, e.g. { id: string, brand?: string }
    params: Record<string, string>;
}>;
