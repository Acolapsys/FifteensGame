export default function ({ store }) {
  if (localStorage.getItem('fifteensGame') !== null) {
    console.log(localStorage.getItem('fifteensGame'), 'localInMiddle')
    store.dispatch('loadGame', localStorage.getItem('fifteensGame'))
  } else {
    store.dispatch('generateNewGame')
  }
}
