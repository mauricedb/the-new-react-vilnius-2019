import React, { useReducer } from 'react';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

import PeopleList from './people-list';
import PersonEditor from './person-editor';

import classes from './people.module.css';

const initialPeople = [
  {
    id: 1,
    firstName: 'Arthur',
    lastName: 'Dent'
  },
  {
    id: 2,
    firstName: 'Ford',
    lastName: 'Prefect'
  },
  {
    id: 3,
    firstName: 'Zaphod',
    lastName: 'Beeblebrox'
  }
];

function reducer(state, action) {
  switch (action.type) {
    case 'select':
      return { ...state, selected: action.payload };
    case 'change':
      const selected = {
        ...state.selected,
        [action.payload.name]: action.payload.value
      };

      return {
        ...state,
        selected,
        people: state.people.map(item => {
          if (item.id === action.payload.id) {
            return selected;
          }

          return item;
        })
      };

    default:
      return state;
  }
}

const People = () => {
  const [state, dispatch] = useReducer(reducer, {
    people: initialPeople,
    selected: initialPeople[0]
  });

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <PeopleList
          people={state.people}
          selected={state.selected}
          dispatch={dispatch}
        />
      </Card>

      <Card className={classNames(classes.card, classes.editor)}>
        <PersonEditor selected={state.selected} dispatch={dispatch} />
      </Card>
    </div>
  );
};

export default People;
