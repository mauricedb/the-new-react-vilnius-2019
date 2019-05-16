import React, { useState, useReducer } from 'react';
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

const People = () => {
  // const [people, setPeople] = useState(initialPeople);
  // const [selected, setSelected] = useState(initialPeople[0]);
  const [state, dispatch] = useReducer(
    function(oldState, action) {
      if (action.type === 'select') {
        return { ...oldState, selected: action.payload };
      } else if (action.type === 'change') {
        return {
          ...oldState,
          selected: action.payload,
          people: oldState.people.map(p => {
            if (p.id !== action.payload.id) {
              return p;
            }

            return action.payload;
          })
        };
      }

      return oldState;
    },
    {
      selected: initialPeople[0],
      people: initialPeople
    }
  );

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <PeopleList
          people={state.people}
          selected={state.selected}
          dispatch={dispatch}
          // setSelected={setSelected}
        />
      </Card>

      <Card className={classNames(classes.card, classes.editor)}>
        <PersonEditor
          people={state.people}
          // setPeople={setPeople}
          selected={state.selected}
          dispatch={dispatch}
          // setSelected={setSelected}
        />
      </Card>
    </div>
  );
};

export default People;
