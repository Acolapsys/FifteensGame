export const state = () => ({
  cells: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ],
  emptyCell: {
    x: 0,
    y: 0,
  },
})

export const mutations = {
  moveCell(state, cell) {
    state.cells[state.emptyCell.y][state.emptyCell.x] = cell.value
    state.cells[cell.y][cell.x] = 0
    state.emptyCell = { x: cell.x, y: cell.y }
  },
}
export const actions = {
  checkFieldFinished({ state }) {
    const result = state.cells
      .reduce((el, acc) => acc.concat(...el), [])
      .join(',')
    return result === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0'
  },
  moveCell({ commit }, cell) {
    commit('moveCell', cell)
  },
}
