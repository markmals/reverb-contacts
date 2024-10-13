"use server";

import { Contact, Contacts, db } from "./db";
import { eq } from "drizzle-orm";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getContacts(query?: string) {
    await fakeNetwork(`getContacts:${query}`);
    let contacts = await db.select().from(Contacts);
    if (query) {
        contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
    await fakeNetwork();
    return await db
        .insert(Contacts)
        .values({
            first: "",
            last: "",
            avatar: "",
            mastodon: "",
        })
        .returning();
}

export async function getContact(id?: string) {
    await fakeNetwork(`contact:${id}`);
    const contact = await db
        .select()
        .from(Contacts)
        .where(eq(Contacts.id, parseInt(id!)))
        .get();

    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return contact;
}

export async function updateContact(id: number, updates: Partial<Contact>) {
    await fakeNetwork();
    return await db.update(Contacts).set(updates).where(eq(Contacts.id, id));
}

export async function deleteContact(id: number) {
    return await db.delete(Contacts).where(eq(Contacts.id, id));
}

// fake a cache so we don't slow down stuff we've already seen
const fakeCache = new Map<string, boolean>();

async function fakeNetwork(key?: string): Promise<void> {
    if (!key || !fakeCache.get(key)) {
        if (key) fakeCache.set(key, true);

        return new Promise(res => {
            setTimeout(res, Math.random() * 1000);
        });
    }
}
