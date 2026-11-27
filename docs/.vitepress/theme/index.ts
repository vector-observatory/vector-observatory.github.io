import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MosquitoGenome from './MosquitoGenome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // The animated mosquito takes the place of the image in the home page hero.
      'home-hero-image': () => h(MosquitoGenome),
      // Small static logo at the top right of the menu bar.
      'nav-bar-content-after': () =>
        h('a', { class: 'vo-nav-logo', href: '/', 'aria-label': 'Vector Observatory home' }, [
          h('img', { src: '/logo.svg', alt: '' })
        ])
    })
}
