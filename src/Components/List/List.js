import './List.css';

const List = (props) => {
  return (
    <ul className='List'>
      {props.elements.map((element) => 
        <li 
          key={"el" + element}
          onClick={props.onClick}
        >{element}</li>
    )}
    </ul>
  );
}

export default List;
