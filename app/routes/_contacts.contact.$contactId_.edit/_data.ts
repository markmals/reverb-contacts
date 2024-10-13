"use server";

import { updateContact } from "~/lib/contacts";

export const actions = {
    async update(data: FormData) {
        const updates = Object.fromEntries(data);
        const id = parseInt(updates.id as string);
        await updateContact(id, updates);
        return Response.redirect(`/contact/${id}`);
    },
};
