"use server";

import { deleteContact, updateContact } from "~/lib/contacts";

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
