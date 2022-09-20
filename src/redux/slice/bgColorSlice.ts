import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface colorParam {
  id: number | null;
  status: string | null;
  bgColorDie: string | null;
  bgColorSign: string | null;
}

interface bgColor {
  color: [
    {
      id: number | null;
      status: string | null;
      bgColorDie: string | null;
      bgColorSign: string | null;
    }
  ];
}

const initialState: bgColor = {
  color: [
    { id: null, status: null, bgColorDie: "white", bgColorSign: "white" },
  ],
};

export const bgColorSlice = createSlice({
  name: "bgColorSlice",
  initialState,
  reducers: {
    setBgColor: (state, actions: PayloadAction<colorParam>) => {
      if (actions.payload.status === "green") {
        state.color.push({
          id: actions.payload.id,
          status: actions.payload.status,
          bgColorDie: "#f1fef5",
          bgColorSign: "#0cec38",
        });
      } else if (actions.payload.status === "yellow") {
        state.color.push({
          id: actions.payload.id,
          status: actions.payload.status,
          bgColorDie: "#fdffe5",
          bgColorSign: "#fab706",
        });
      } else if (actions.payload.status === "red") {
        state.color.push({
          id: actions.payload.id,
          status: actions.payload.status,
          bgColorDie: "#fef7f7",
          bgColorSign: "#fc614a",
        });
      } else {
        state.color.push(actions.payload);
      }
    },
  },
});

export const { setBgColor } = bgColorSlice.actions;

export default bgColorSlice.reducer;
