import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {
        id: 1,
        name: 'chaitu',
        age: 23,
        skill: 'react'
    },
    {
        id: 2,
        name: 'hema',
        age: 2,
        skill: 'spring'
    },
    {
        id: 3,
        name: 'neha',
        age: 24,
        skill: 'java'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person}/> )
  return <div>{personList}</div>
}

export default NameList