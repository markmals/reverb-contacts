# Reverb Contacts

Experimenting with API for the [future of Remix](https://remix.run/blog/incremental-path-to-react-19#rsc-changes-remix), as a thin wrapper around React 19.

## Thoughts & Ideas

-   The flat file structure with folders for routes and colocation of component files is a great pattern with server components, because you end up needing to break out a bunch of little client components to keep your islands as small as possible.
-   Declaring your server functions as loaders would allow the Reverb plugin to create endpoints for them to be called RESTfully, without the React RPC magic... But you probably need more metadata that this prototype includes for that to work.
-   Colocating loaders and actions in a `_data.ts` file also allows the Reverb plugin to invalidate the `cache` for specific loaders based on which actions run 🤔
