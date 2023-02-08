import "./filter.css";

const Filter = (props) => {

    const {id, title, setCheck, check} = props;
  
    
  
    return (
      <div className="filters">
          <input className="checkBox" id={id} type="checkbox" onChange={()=>setCheck(!check)}/> <label htmlFor={id}>{title}</label>
      </div>
    )
  }
  
  export default Filter;