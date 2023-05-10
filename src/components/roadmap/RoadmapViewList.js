/* eslint-disable */
import { Component } from "react";
import RoadmapViewListItem from "./RoadmapViewListItem"


class RoadmapViewList extends Component {
  render() {
    const {
      dataItems, 
      selectItems, 
      handleChange, 
      DragStart,
      DragOver,
      DragEnter,
      DragLeave,
      Drop,
      DragEnd,
      classDragEndDrop
    } = this.props;

    return (
      <ul className="roadmap-list mt-56">
        {dataItems.map((item) => (
          <RoadmapViewListItem 
            classDragEndDrop={classDragEndDrop} 
            item={item} 
            key={item.id} 
            selectItems={selectItems} 
            handleChange={handleChange}
            DragStart={DragStart}
            DragOver={DragOver}
            DragEnter={DragEnter}
            DragLeave={DragLeave}
            Drop={Drop}
            DragEnd={DragEnd}
          />
        ))}
      </ul>
    ); 
  }
}

export default RoadmapViewList;
