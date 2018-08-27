export const selectPlayer = (player) => {
  // action creator - func that returns an action
  return { type: 'SELECT_PLAYER', payload: player }
}
