import "./list.css";

const List = ({ items }) => {
  return (
    <div className="list-container">
      <ul>
        {items.map((item) => (  
          <li> 
            <input
              disabled={true}
              className="custom-checkbox"
              type="checkbox"
              checked={item.ischecked} 
            /> {item.title}  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

  