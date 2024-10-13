"use server";

import { createContact, getContacts } from "~/lib/contacts";

export const loaders = {
    async getContacts(query?: string) {
        return await getContacts(query);
    },
};

export const actions = {
    async create() {
        const contacts = await createContact();
        throw Response.redirect(`/contact/${contacts[0].id}`);
    },
};
