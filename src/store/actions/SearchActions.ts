type SearchActionsNames = "UPDATE" | "RESET";

interface SearchActions {
  type: SearchActionsNames;
  [extraProps: string]: any
}

export const doUpdate = (
  text: string,
  registrationRequired: boolean,
  questionsAmount: number
): SearchActions => ({ type: "UPDATE", text, registrationRequired, questionsAmount });

export const doReset = (): SearchActions => ({ type: "RESET" });

export default SearchActions;