export default function ({ store }) {
  if (localStorage.getItem('fifteensGame') !== null) {
    store.dispatch('loadGame', localStorage.getItem('fifteensGame'))
  } else {
    store.dispatch('startNewGame')
  }
}
