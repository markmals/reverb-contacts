import { RouteComponentProps } from "react-router/reverb";
import { loaders } from "../_contacts.contact.$contactId/_data";
import { actions } from "./_data";
import { CancelButton } from "./CancelButton";

export default async function EditContact({ params }: RouteComponentProps) {
    const contact = await loaders.getContact(parseInt(params.contactId!));

    return (
        <form action={actions.update} id="contact-form">
            <p>
                <span>Name</span>
                <input
                    aria-label="First name"
                    value={contact.first ?? undefined}
                    name="first"
                    placeholder="First"
                    type="text"
                />
                <input
                    aria-label="Last name"
                    value={contact.last ?? undefined}
                    name="last"
                    placeholder="Last"
                    type="text"
                />
            </p>
            <label>
                <span>Mastodon</span>
                <input
                    value={contact.mastodon ?? undefined}
                    name="mastodon"
                    placeholder="@Gargron@mastodon.social"
                    type="text"
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    aria-label="Avatar URL"
                    value={contact.avatar ?? undefined}
                    name="avatar"
                    placeholder="https://example.com/avatar.jpg"
                    type="text"
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea value={contact.notes ?? undefined} name="notes" rows={6} />
            </label>
            <p>
                <button type="submit">Save</button>
                <CancelButton>Cancel</CancelButton>
            </p>
        </form>
    );
}
