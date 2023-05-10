import { Component } from 'react';
import PropTypes from 'prop-types';
import complete from '../../assets/images/complete.svg';
import nocomplete from '../../assets/images/nocomplete.svg';

class RoadmapViewListItem extends Component {
  render() {
    const {
      item, 
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
    
    const classesSearch = (selectItems?.includes(({ id }) => id === item.id)) ? 'active-search' : '';
    const noActive = !item.complete ? 'no-active' : '';
    const dDClassName = (classDragEndDrop.id === item.id) ? classDragEndDrop.classN : '';
    const classesName = `${classesSearch} ${noActive} ${dDClassName}`;
    
    return (
      <li
        aria-hidden="true"
        onClick={handleChange}
        id={item.id}
        className={classesName} 
        draggable="true" 
        onDragStart={DragStart} 
        onDragOver={DragOver} 
        onDragEnter={DragEnter}
        onDragLeave={DragLeave}
        onDrop={Drop}
        onDragEnd={DragEnd}
      >
        <p>{item.complete ? 'Completed' : 'Planned'}</p>
        <h6>
          <img className="svg" src={item.complete ? complete : nocomplete} alt={`item_${complete}`} />
          <span>{item.title}</span>
        </h6>
        <p>{item.info}</p>

        <h6 className="builder-name">
          {item.builder.firstName} 
          {' '}
          {item.builder.lastName}
        </h6>
        <p>
          <small>
            Update:
            {item.date}
          </small>
        </p>
      </li>
    ); 
  }
}

export default RoadmapViewListItem;

RoadmapViewListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    complete: PropTypes.number.isRequired,
    builder: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired
  }), 
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
    classN: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })
};

RoadmapViewListItem.defaultProps = {
  classDragEndDrop: null,
  selectItems: null,
  item: null,
};
