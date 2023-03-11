import { Component } from "react";
import RoadmapViewListItem from "./RoadmapViewListItem"



class RoadmapViewList extends Component {
  render() {
    const {dataItems, selectItems} = this.props;

    return (
      <ul className="roadmap-list mt-56">
        {dataItems.map((item) => (
          <RoadmapViewListItem item={item} key={item.id} selectItems={selectItems} />
        ))}
      </ul>
    ); 
  }
}

export default RoadmapViewList;
