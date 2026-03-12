import React from 'react'

function Listandkeys() {
    const persons = [
        {
            id: 1,
            name: 'Saad',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Anjum',
            age: 22,
            skill: 'Javascript'
        },
        {
            id: 3,
            name: 'Ali',
            age: 28,
            skill: 'Python'
        }
    ]

    const personList = persons.map(person => (
        <h2 key={person.id}>
            I am {person.name}. I am {person.age} years old. I know {person.skill}
        </h2>
    ))

    return (
        <div>
            {personList}
        </div>
    )
}

export default Listandkeys
