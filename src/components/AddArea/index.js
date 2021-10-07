import React, { useState } from 'react'; 
import { Container } from './styles';

export const AddArea = ({ onEnter }) => {
    const [ inputText, setInputText ] = useState('');

    const handleKeyUp = (e = KeyboardEvent) => {
        if(e.code === 'Enter' || e.code === 'NumpadEnter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        };
    }

    return(
        <Container>
           <div className="image">➕</div>
           <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
           />

        </Container>
    ); 
}