import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString; // spisane

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createActionChange = payload => ({ payload: { ...payload, id: shortid.generate() }, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

