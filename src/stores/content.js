import { defineStore } from "pinia";

export const useContentStore = defineStore('content', {
    state: () => ({
        URL: "https://api.tvmaze.com/",
        URL2: "http://localhost:3000/",
        controiler: new AbortController(),
        userValue: '',
        searchData: null,
        dataView: null,
        favData: [],
        modalImageStatus: false,
        modalImgContent: '',
        actors: null,
        sesonsShow: null,
        episodes: null


    }),
    actions: {
        async search() {
            this.controiler.abort()
            this.controiler = new AbortController()
            if (this.userValue != '') {
                const response = await fetch(`${this.URL}search/shows?q=${this.userValue}`, {
                    method: 'GET',
                    signal: this.controiler.signal
                })
                this.searchData = await response.json()
            } else {
                this.searchData = null
            }
        },
        async getData(pageName) {
            let number = Math.floor(Math.random() * 241) + 1;
            const response = await fetch(`${this.URL}shows`)
            const ress = await response.json()
            if (pageName === 'home') { this.dataView = ress.filter(i => i.id > number && i.id < number + 11) }
            else if (pageName === 'movie') { this.dataView = ress.filter(i => i.type === 'Scripted') }
            else if (pageName === 'cartoon') { this.dataView = ress.filter(i => i.type === 'Animation') }
        },
        async addFavorite(item) {
            const response = await fetch(`${this.URL2}favorite`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            if (response.ok) { this.getFavorite() }
        },
        async getFavorite() {
            const response = await fetch(`${this.URL2}favorite`)
            this.favData = await response.json()
        },
        async deleteFavorite(id) {
            const response = await fetch(`${this.URL2}favorite/${id}`, {
                method: 'DELETE'
            })
            if (response.ok) { this.getFavorite() }

        },
        openModallWindow(image) {
            this.modalImageStatus = true
            this.modalImgContent = image
        },
        async getCastActor(id) {
            const response = await fetch(`${this.URL}shows/${id}/cast`)
            this.actors = await response.json()
        },
        async getSesonsShow(id) {
            const response = await  fetch(`${this.URL}shows/${id}/seasons`)
            this.sesonsShow = await response.json()
        }
   


    },


})