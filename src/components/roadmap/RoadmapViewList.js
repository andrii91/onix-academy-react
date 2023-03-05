import { Component } from "react";
import RoadmapViewListItem from "./RoadmapViewListItem"



class RoadmapViewList extends Component {
  render() {
    const {dataItems} = this.props;

    return (
      <ul className="roadmap-list mt-56">
        {dataItems.map((item) => (
          <RoadmapViewListItem item={item} key={item.id}/>
        ))}
      </ul>
    ); 
  }
}

export default RoadmapViewList;
