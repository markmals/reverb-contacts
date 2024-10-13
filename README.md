# Reverb Contacts

Experimenting with API for the [future of Remix](https://remix.run/blog/incremental-path-to-react-19#rsc-changes-remix), as a thin wrapper around React 19.

## Thoughts & Ideas

-   The Reverb plugin will automatically `React.cache()` each loaders exported in the `_data.ts` file for the route and call each of them in a `preload()` function for the route.
-   You only really need to declare your server functions as loaders if you're calling your loaders multiple times for the same page/route or if you're calling your loaders on the client side with `use()`... I think...
-   Declaring your server functions as loaders would also allow the Reverb plugin to create endpoints for them to be called RESTfully, without the React RPC magic... But you probably need more metadata that this prototype includes for that to work.
-   Colocating loaders and actions in a `_data.ts` file also allows the Reverb plugin to invalidate the `cache` for specific loaders based on which actions run 🤔
-   The flat file structure with folders for routes and colocation of component files is a great pattern with server components, because you end up needing to break out a bunch of little client components to keep your islands as small as possible.
