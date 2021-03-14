export const state = () => ({
  cells: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [0, 13, 14, 15],
  ],
  emptyCell: {
    y: 3,
    x: 0,
  },
  isWinner: false,
  isLoaded: false,
  arraySize: 4,
  counter: 0,
})

export const mutations = {
  moveCell(state, cell) {
    state.cells = [...state.cells] // для реактивности
    state.cells[state.emptyCell.y][state.emptyCell.x] = cell.value
    state.cells[cell.y][cell.x] = 0
    state.emptyCell = { x: cell.x, y: cell.y }
    state.counter++
  },
  setIsWinner(state, payload) {
    state.isWinner = payload
  },
  increaseCounter({ state }) {
    state.counter++
  },
  clearCounter({ state }) {
    state.counter = 0
  },
  setField(state, gameField) {
    const tempArray = [[], [], [], []]
    gameField.forEach((el, idx) => {
      const y = Math.floor(idx / 4)
      const x = idx % 4
      tempArray[y][x] = +el
      if (Number(el) === 0) {
        state.emptyCell = { y, x }
      }
    })
    state.cells = [...tempArray]
  },
  setIsLoaded(state, flag) {
    state.isLoaded = flag
  },
}
export const actions = {
  checkFieldFinishedAndSave({ state, commit, dispatch }) {
    const result = state.cells
      .reduce((acc, el) => acc.concat(...el), [])
      .join(',')
    if (result === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      commit('setIsWinner', true)
      dispatch('clearSavedGame')
    } else {
      dispatch('saveGame', result)
    }
  },
  moveCell({ state, commit, dispatch }, cell) {
    if (
      (Math.abs(cell.x - state.emptyCell.x) === 1 &&
        cell.y - state.emptyCell.y === 0) ||
      (Math.abs(cell.y - state.emptyCell.y) === 1 &&
        cell.x - state.emptyCell.x === 0)
    ) {
      commit('moveCell', cell)
      dispatch('checkFieldFinishedAndSave')
    }
  },
  setIsWinner({ commit }, payload) {
    commit('setIsWinner', payload)
  },
  startNewGame({ commit, dispatch }) {
    commit('setIsWinner', false)
    commit('setIsLoaded', false)
    commit('clearCounter')
    dispatch('generateNewField')
  },
  generateNewField({ state, commit }) {
    const tempArray = []
    const fullSize = state.arraySize ** 2
    for (let i = 0; i < fullSize; i++) {
      tempArray.splice(Math.floor(Math.random() * (i + 1)), 0, i)
    }
    const validateValue = dispatch('getValidateFieldValue', tempArray)
    if (validateValue % 2 !== 0) {
      const tempValue = tempArray[fullSize - 1]
      tempArray[fullSize - 1] = tempArray[fullSize - 2]
      tempArray[fullSize - 2] = tempValue
    }
    commit('setField', tempArray)
  },
  getValidateFieldValue(context, fieldArray) {
    const fullSize = state.arraySize ** 2
    let validateValue = 0
    for (let i = 0; i < fullSize - 1; i++) {
      for (let j = i + 1; j < fullSize; j++) {
        if (fieldArray[i] > fieldArray[j] && fieldArray[j] !== 0) {
          validateValue++
        }
      }
    }
    const rowWithEmptyCell =
      Math.ceil((fieldArray.indexOf(0) + 1) / state.arraySize) || 1
    validateValue += rowWithEmptyCell
    return validateValue
  },
  saveGame(context, currentGame) {
    localStorage.setItem('fifteensGame', currentGame)
  },
  clearSavedGame() {
    localStorage.removeItem('fifteensGame')
  },
  loadGame({ state, commit }, game) {
    const gameNew = game.split(',')
    commit('setField', gameNew)
    state.isLoaded = true
  },
  setIsLoaded({ commit }, flag) {
    commit('setIsLoaded', flag)
  },
}
