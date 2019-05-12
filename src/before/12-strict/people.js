import React, { useReducer } from 'react';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

import PeopleList from './people-list';
import PersonEditor from './person-editor';

import classes from './people.module.css';

const initialPeople = [
  {
    id: 1,
    fullName: 'Arthur Dent'
  },
  {
    id: 2,
    fullName: 'Ford Prefect'
  },
  {
    id: 3,
    fullName: 'Zaphod Beeblebrox'
  },
  {
    id: 4,
    fullName: 'Slartibartfast'
  },
  {
    id: 5,
    fullName: 'Trillian'
  }
];

function reducer(state, action) {
  switch (action.type) {
    case 'select':
      return { ...state, selected: action.payload };
    case 'change':
      return {
        ...state,
        selected: action.payload,
        people: state.people.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
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
