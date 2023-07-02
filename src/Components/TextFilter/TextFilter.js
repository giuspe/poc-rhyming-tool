import './TextFilter.css';

const TextFilter = (props) => {
  return (
    <div>
      <label className='TextFilter'>filter: 
        <input id="filter" onChange={props.onChange} />
      </label>
    </div>
  );
}

export default TextFilter;
