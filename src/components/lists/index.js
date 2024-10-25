import "./list.css"

const List=({item})=> {
  
    return (
      <div className="list-container">
        <ul>
          {item.map((item) => (
            <li>
              <input type="checkbox" /> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default List;
  