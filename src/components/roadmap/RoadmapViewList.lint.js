import { Component } from 'react';
import PropTypes from 'prop-types';
import RoadmapViewListItem from './RoadmapViewListItem';

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

RoadmapViewList.propTypes = {
  dataItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    complete: PropTypes.number.isRequired,
    builder: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired
  })), 
  selectItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    complete: PropTypes.number.isRequired,
    builder: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired
  })), 
  handleChange: PropTypes.func.isRequired, 
  DragStart: PropTypes.func.isRequired,
  DragOver: PropTypes.func.isRequired,
  DragEnter: PropTypes.func.isRequired,
  DragLeave: PropTypes.func.isRequired,
  Drop: PropTypes.func.isRequired,
  DragEnd: PropTypes.func.isRequired,
  classDragEndDrop: PropTypes.shape({
    classN: PropTypes.string,
    id: PropTypes.number.isRequired,
  })
};

RoadmapViewList.defaultProps = {
  dataItems: null,
  classDragEndDrop: null,
  selectItems: null
};
