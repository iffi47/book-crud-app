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
})