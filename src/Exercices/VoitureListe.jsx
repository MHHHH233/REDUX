import { createSlice } from '@reduxjs/toolkit';

const voitureSlice = createSlice({
  name: 'voitures',
  initialState: {
    data: [],
  },
  reducers: {
    setVoitures: (state, action) => {
      state.data = action.payload;
    },
    ajouterVoiture: (state, action) => {
      state.data.push(action.payload);
    },
    supprimer: (state, action) => {
      state.data = state.data.filter((value) => value.id !== action.payload);
    },
  },
});

export const { setVoitures, ajouterVoiture, supprimer } = voitureSlice.actions;
export default voitureSlice.reducer;