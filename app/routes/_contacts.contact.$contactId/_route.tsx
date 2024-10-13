import { MetaFunction, RouteArgs } from "react-router/reverb";
import { actions, loaders } from "./_data";
import { Favorite } from "./Favorite";

export const meta: MetaFunction = async ({ params }) => {
    const contact = await loaders.getContact(parseInt(params.contactId!));
    return [{ title: `${contact.first} ${contact.last} | Reverb Contacts` }];
};

export async function route({ params }: RouteArgs) {
    const contact = await loaders.getContact(parseInt(params.contactId!));
    const hasAvatar = !!contact.avatar;

    return (
        <div id="contact">
            <div>
                <img
                    alt=""
                    src={
                        hasAvatar
                            ? contact.avatar
                            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    }
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}
                    <Favorite id={contact.id} favorite={contact.favorite!} />
                </h1>

                {contact.mastodon && (
                    <p>
                        <a
                            href={`https://mastodon.social/${contact.mastodon.replace(
                                "@mastodon.social",
                                ""
                            )}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {contact.mastodon}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    {/* FIXME: I don't think this will be client side in React 19 */}
                    {/* without an action function, but I don't want to make a component */}
                    {/* just for that... */}
                    <form action="edit" method="get">
                        <button type="submit">Edit</button>
                    </form>
                    <form
                        action={actions.delete}
                        onSubmit={event => {
                            if (!confirm("Please confirm you want to delete this record.")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <input type="hidden" name="id" value={contact.id} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
