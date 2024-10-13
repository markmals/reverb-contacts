"use server";

import { createContact } from "~/lib/contacts";

export const actions = {
    async create() {
        const contacts = await createContact();
        throw Response.redirect(`/contact/${contacts[0].id}`);
    },
};
