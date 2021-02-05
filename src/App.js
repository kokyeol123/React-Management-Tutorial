import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 111,
  'image' : 'https://placeimg.com/128/128/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 222,
  'image' : 'https://placeimg.com/128/128/2',
  'name' : '고결',
  'birthday' : '961129',
  'gender' : '남자',
  'job' : '회사원'
},
{
  'id' : 333,
  'image' : 'https://placeimg.com/128/128/3',
  'name' : '임가가',
  'birthday' : '461222',
  'gender' : '여자',
  'job' : '직장인'
}
]

function App() {
  return (
    <div>
    {
      customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        )
      })
    }
    </div>
  );
}

export default App;
