import speech from './components/speechVoice/speech.vue'

export default function install (Vue, options = {}) {
  Vue.component('vue-speech', speech)
}