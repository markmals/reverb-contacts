"use server";

import { deleteContact, getContact, updateContact } from "~/lib/contacts";

export const loaders = {
    async getContact(id: number) {
        const contact = await getContact(id);

        if (!contact) {
            throw new Response("", {
                status: 404,
                statusText: "Not Found",
            });
        }

        return contact;
    },
};

export const actions = {
    async favorite(data: FormData) {
        return await updateContact(parseInt(data.get("id") as string), {
            favorite: data.get("favorite") === "true",
        });
    },
    async delete(data: FormData) {
        await deleteContact(parseInt(data.get("id") as string));
        throw Response.redirect("/");
    },
};
