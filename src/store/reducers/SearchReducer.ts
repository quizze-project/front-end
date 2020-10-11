import SearchActions from "../actions/SearchActions";

export interface Search {
  text: string;
  registrationRequired: boolean;
  questionsAmount: number;
}

const INITIAL_STATE: Search = { 
  text: '',
  registrationRequired: false,
  questionsAmount: 5
};

const SearchReducer = (
  search: Search = INITIAL_STATE,
  action: SearchActions
): Search => {
  switch(action.type) {
    case "UPDATE":
      const { text, registrationRequired, questionsAmount } = action;
      return { text, registrationRequired, questionsAmount };
    case "RESET":
      return INITIAL_STATE;
  }

  return search;
}

export default SearchReducer;