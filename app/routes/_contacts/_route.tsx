import type { RouteArgs } from "react-router/reverb";
import { Toolbar } from "./Toolbar";
import { NavLink } from "react-router";
import { DetailContainer } from "./DetailContainer";
import { getContacts } from "~/lib/contacts";

export async function route({ request, children }: RouteArgs) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? undefined;
    const contacts = await getContacts(q);

    return (
        <div id="root">
            <div id="sidebar">
                <h1>Reverb Contacts</h1>
                <div>
                    <Toolbar />
                </div>
                <nav>
                    {!!contacts.length ? (
                        <ul>
                            {contacts.map(contact => (
                                <li>
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active" : isPending ? "pending" : ""
                                        }
                                        to={`contact/${contact.id}`}
                                    >
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <DetailContainer>{children}</DetailContainer>
        </div>
    );
}
