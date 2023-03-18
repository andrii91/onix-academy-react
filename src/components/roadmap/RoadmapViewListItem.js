import { Component } from "react";

import complete from '../../assets/images/complete.svg';
import nocomplete from '../../assets/images/nocomplete.svg';


class RoadmapViewListItem extends Component {
  render() {
    const {item, selectItems, handleChange,
      DragStart,
      DragOver,
      DragEnter,
      DragLeave,
      Drop,
      DragEnd,
    } = this.props;
    
    const classesSearch = (selectItems.length > 0 && selectItems.find(itemSearch => itemSearch.id === item.id)) ? 'active-search' : '';
    const noActive = !item.complete ? 'no-active' : '';
    const classesName = `${classesSearch} ${noActive}`;
    
    return (
        <li onClick={handleChange} id={item.id} className={classesName} 
          draggable='true' 
          onDragStart={DragStart} 
          onDragOver={DragOver} 
          onDragEnter={DragEnter}
          onDragLeave={DragLeave}
          onDrop={Drop}
          onDragEnd={DragEnd}
        >
          <p>{item.complete ? 'Completed' : 'Planned'}</p>
          <h6>
              <img className="svg" src={item.complete ? complete : nocomplete} alt={'item_'+complete} />
              <span>{item.title}</span>
          </h6>
          <p>{item.info}</p>

          <h6 className="builder-name">{item.builder.firstName} {item.builder.lastName}</h6>
          <p><small>Update: {item.date}</small></p>
        </li>
    ); 
  }
}

export default RoadmapViewListItem;
