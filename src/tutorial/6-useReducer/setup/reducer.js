// reducer function
export const reducer = (state, action) => {
  if (action.type === "ACTION") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      IsModelOpen: true,
      modelContent: "item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      IsModelOpen: true,
      modelContent: "please enter a valid value",
    };
  }

  if (action.type === "CLOSE_MODEL") {
    return { ...state, IsModelOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return { ...state, people: newPeople };
  }

  throw new Error("no matching action type");
};
