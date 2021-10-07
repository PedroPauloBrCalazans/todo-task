import React, { useState } from "react";
import { Container, Area, Header } from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {

  const [list, setList] = useState(
    [
      { id: 1, name: 'Comprar pão na padaria', done: false },
      { id: 2, name: 'Comprar bolo na padaria', done: true }
    ]
  );

  const handleAddTask = (e) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: e,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id, done) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id){
        newList[i].done = done;
      };
    };
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea  onEnter={handleAddTask}/>

        {list.map((item, index) => (
         <ListItem  
          key={index}
          item={item}
          onChange={handleTaskChange}
        />
        ))}
      </Area>
    </Container>
  );
}

export default App;