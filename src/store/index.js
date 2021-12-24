import { defineStore } from 'pinia'
import home from './modules/home'

export const useHomeStore = defineStore('home', home)
