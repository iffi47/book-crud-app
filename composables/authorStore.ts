import { useFetch } from "#imports";
import { defineStore } from "pinia";
import type { IAuthor } from "../types";
import useToast from "./useToast";

export const useAuthStore = defineStore("author-store", {
 state: () => ({
  authors: [] as IAuthor[],
 }),

 actions: {
  // ✅ Get all authors
  async getAll() {
   try {
    const { data, error } = await useFetch<IAuthor[]>("/api/authors");

    if (error.value) throw error.value;

    if (data.value) {
     this.authors = data.value;
     return data.value;
    }
   } catch (e: any) {
    useToast().error(e?.message || "Failed to load authors");
   }
  },

  // ✅ Create an author
  async create(name: string) {
   try {
    const { error } = await useFetch("/api/authors/create", {
     method: "POST",
     body: { name },
    });

    if (error.value) throw error.value;

    await this.getAll();
    useToast().success("Author created");
   } catch (e: any) {
    useToast().error(e?.message || "Failed to create author");
   }
  },

  // ✅ Update an author
  async update(id: string, name: string) {
   try {
    const { error } = await useFetch(`/api/authors/${id}`, {
     method: "PUT",
     body: { name },
    });

    if (error.value) throw error.value;

    await this.getAll();
    useToast().success("Author updated");
   } catch (e: any) {
    useToast().error(e?.message || "Failed to update author");
   }
  },

  // ✅ Delete an author
  async remove(id: string) {
   try {
    const { error } = await useFetch(`/api/authors/${id}`, {
     method: "DELETE",
    });

    if (error.value) throw error.value;

    await this.getAll();
    useToast().success("Author removed");
   } catch (e: any) {
    useToast().error(e?.message || "Failed to remove author");
   }
  },
 },
});
