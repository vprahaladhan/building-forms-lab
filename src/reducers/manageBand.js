export default function manageBand(state = { bands: [] }, { type, payload }) {
  switch(type) {
    case 'ADD_BAND': 
      return { ...state, bands: state.bands.concat(payload) }

    default:
      return state;
  }
};