export default function ({ store }) {
  if (localStorage.getItem('fifteensGame') !== null) {
    store.dispatch('loadGame', JSON.parse(localStorage.getItem('fifteensGame')))
  } else {
    store.dispatch('startNewGame')
  }
}
