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
})

export const mutations = {
  moveCell(state, cell) {
    state.cells = [...state.cells] // для реактивности
    state.cells[state.emptyCell.y][state.emptyCell.x] = cell.value
    state.cells[cell.y][cell.x] = 0
    state.emptyCell = { x: cell.x, y: cell.y }
  },
  setIsWinner(state, payload) {
    state.isWinner = payload
  },
  loadGame(state, game) {
    const tempArray = [[], [], [], []]
    const gameNew = game.split(',')
    gameNew.forEach((el, idx) => {
      const y = Math.floor(idx / 4)
      const x = idx % 4
      tempArray[y][x] = +el
      if (Number(el) === 0) {
        state.emptyCell = { y, x }
      }
    })
    state.cells = [...tempArray]
  },
}
export const actions = {
  checkFieldFinishedAndSave({ state, commit, dispatch }) {
    const result = state.cells
      .reduce((acc, el) => acc.concat(...el), [])
      .join(',')
    if (result === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
      commit('setIsWinner', true)
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
  generateNewGame({ commit }) {
    commit('setIsWinner', false)
  },
  saveGame(context, currentGame) {
    console.log(currentGame, 'curr')
    localStorage.setItem('fifteensGame', currentGame)
  },
  loadGame({ commit }, game) {
    commit('loadGame', game)
  },
}
