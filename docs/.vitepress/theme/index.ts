import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MosquitoGenome from './MosquitoGenome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // The animated mosquito takes the place of the image in the home page hero.
  Layout: () => h(DefaultTheme.Layout, null, { 'home-hero-image': () => h(MosquitoGenome) })
}
