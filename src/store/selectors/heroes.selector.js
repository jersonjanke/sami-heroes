export const selectorPublisher = (state) => {
  if (state.heroes.publisher === '') {
    return state.heroes.list
  } else {
    return state.heroes.list.filter(
      (hero) => hero.biography.publisher === state.heroes.publisher
    )
  }
}
