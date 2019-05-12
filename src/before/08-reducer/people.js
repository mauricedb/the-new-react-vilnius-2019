import React, { useState } from 'react';
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
  const [people, setPeople] = useState(initialPeople);
  const [selected, setSelected] = useState(initialPeople[0]);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <PeopleList
          people={people}
          selected={selected}
          setSelected={setSelected}
        />
      </Card>

      <Card className={classNames(classes.card, classes.editor)}>
        <PersonEditor
          people={people}
          setPeople={setPeople}
          selected={selected}
          setSelected={setSelected}
        />
      </Card>
    </div>
  );
};

export default People;
