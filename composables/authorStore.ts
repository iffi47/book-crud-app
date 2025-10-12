import { string } from 'joi';
import {defineStore} from "pinia";
import {IAuthor} from "~~/types";
import useToast from "./useToast";

export const useAuthStore= defineStore("author-store",{ 
  state:() =>({
    authors:[] as IAuthor[]
  }), 
  actions: {
    async getAll() {
      try{
        let data= await useFetch<IAuthor[]>("/api/authors");
        this.authors= data;
        return data as IAuthor[];
      }catch(e){
        useToast().error(e.message);
      }
    }
  }
  //Create new authors
  	async create(name: string) {
			await useFetch("/api/authors/create", {
				method: "POST",
				body: { name },
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Author created");
				});
		},
    // Update an author
		async update(id: string, name: string) {
			await useFetch(`/api/authors/${id}`, {
				method: "PUT",
				body: { name },
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Author updated");
				});
		},
		// delete an author
		async remove(id: string) {
			await useFetch(`/api/authors/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Author removed");
				});
		},
})