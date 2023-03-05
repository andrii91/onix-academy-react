import { Component } from "react";

import complete from '../../assets/images/complete.svg';
import nocomplete from '../../assets/images/nocomplete.svg';


class RoadmapViewListItem extends Component {
  render() {
    const {item} = this.props;

    return (
        <li onClick={() => alert(JSON.stringify(item, null, 2))}  className={!item.complete ? 'no-active' : ''}>
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
