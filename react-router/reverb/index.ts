import type { MetaMatches } from "node_modules/react-router/dist/lib/dom/ssr/routeModules";
import type { PropsWithChildren } from "react";
import type { LoaderFunction, MetaDescriptor, Location } from "react-router";

export type RouteArgs = PropsWithChildren<{
    request: Request;
    // TODO: Plugin to make this type-safe, e.g. { id: string, brand?: string }
    params: Record<string, string>;
}>;

export interface MetaArgs<
    Data = unknown,
    MatchLoaders extends Record<string, LoaderFunction | unknown> = Record<string, unknown>
> {
    data: Data | undefined;
    params: Record<string, string | undefined>;
    location: Location;
    matches: MetaMatches<MatchLoaders>;
    error?: unknown;
}

export interface MetaFunction<
    Data = unknown,
    MatchLoaders extends Record<string, LoaderFunction | unknown> = Record<string, unknown>
> {
    (args: MetaArgs<Data, MatchLoaders>): MaybePromise<MetaDescriptor[] | undefined>;
}

type MaybePromise<T> = T | Promise<T>;
