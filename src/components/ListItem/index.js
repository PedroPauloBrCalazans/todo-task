import { Container } from './styles';

export const ListItem = ({item, onChange}) => {

    return(
        <Container done={item.done}>
            <input 
                type="checkbox"
                checked={item.done}
                onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <label>{item.name} </label>
        </Container>
    );
}