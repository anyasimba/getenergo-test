export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('catalog/fetch')
  },
}
