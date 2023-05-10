import { Component } from 'react';
import { faker } from '@faker-js/faker';
import RoadmapViewList from './RoadmapViewList';

const data = [
  {
    id: 4,
    title: faker.name.jobTitle(),
    info: faker.lorem.text(),
    complete: 1,
    builder: {
      firstName: 'Jon',
      lastName: 'Dou',
    },
    date: '12/31/1993',
  },
  {
    id: 6,
    title: faker.name.jobTitle(),
    info: faker.lorem.text(),
    complete: 1,
    builder: {
      firstName: 'Vasia',
      lastName: 'Pupkin',
    },
    date: '01/26/2012',
  },
  {
    id: 2,
    title: faker.name.jobTitle(),
    info: faker.lorem.text(),
    complete: 0,
    builder: {
      firstName: 'Vykola',
      lastName: 'Sikira',
    },
    date: '01/26/2021',
  },
  {
    id: 1,
    title: faker.name.jobTitle(),
    info: faker.lorem.text(),
    complete: 0,
    builder: {
      firstName: 'Don',
      lastName: 'Penenyon',
    },
    date: '05/26/2022',
  },
  {
    id: 13,
    title: faker.name.jobTitle(),
    info: faker.lorem.text(),
    complete: 0,
    builder: {
      firstName: 'Kasatik',
      lastName: 'Dou',
    },
    date: '05/22/2023',
  }
];

class Roadmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roadmap: data,
      searchString: '',
      searchItems: [],
      classNameDD: {
        classN: '',
        id: -1 
      },
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  addItem = () => {
    const newItem = {
      id: (new Date()).getTime(),
      title: faker.name.jobTitle(),
      info: faker.lorem.text(),
      complete: 1,
      builder: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      },
      date: new Date().toLocaleDateString('en-US'),
    };

    this.setState(({ roadmap }) => ({ roadmap: [...roadmap, newItem] }));
  };

  removeItem = () => {
    const { roadmap: roadmapData } = this.state;
    roadmapData.pop();

    this.setState({ roadmap: roadmapData });
  };

  sortItemById = () => {
    const naturalCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

    this.setState(({ roadmap }) => {
      return {
        roadmap: roadmap.sort((a, b) => naturalCollator.compare(a.id, b.id))
      };
    });
  };

  sortItemByDate = () => {
    const { roadmap: roadmapData } = this.state;

    for (let i = 0; i < roadmapData.length; i += 1) {
      for (let k = 0; k < roadmapData.length - 1; k += 1) {
        if (new Date(roadmapData[k].date) < new Date(roadmapData[k + 1].date)) {
          const item = roadmapData[k];
          roadmapData[k] = roadmapData[k + 1];
          roadmapData[k + 1] = item;
        }
      }
    }
    this.setState({ roadmap: roadmapData });
  };

  onChangeSearch = (e) => {
    const { value } = e.target;
    const { roadmap: roadmapData } = this.state;
    let filters = [];
    if (value !== '') {
      filters = roadmapData.filter((el) => {
        return el.title.toLowerCase().includes(value.toLowerCase());
      });
    }

    this.setState({ searchString: value, searchItems: filters });
  };

  handleKeyDown = (event) => {
    const { roadmap: roadmapData } = this.state;
    const filters = [];

    const hotKey = {
      81: () => filters.push(roadmapData[0]),
      87: () => filters.push(roadmapData[1]),
      69: () => filters.push(roadmapData[2]),
      82: () => filters.push(roadmapData[3]),
    };

    hotKey[event.keyCode]?.();

    this.setState({ searchItems: filters });
  };

  parentHandleChange = (e) => {
    const { roadmap: roadmapData, } = this.state;
    let filters = [];
    let id = -1;

    if (e.target.tagName === 'LI') {
      id = e.target.id;
    } else {
      id = e.target.parentElement.id;
    }

    if (id > 0) {
      filters = roadmapData.filter((el) => {
        return el.id === Number(id);
      });
  
      this.setState({ searchItems: filters });
    }
  };

  /* change opacity for the dragged item. 
  remember the source item for the drop later */
  handleDragStart = (event) => {
    this.setState({ 
      sourceElement: event.target,
      classNameDD: 'over-move'
    });

    event.dataTransfer.effectAllowed = 'move';// eslint-disable-line no-param-reassign
  };

  /* do not trigger default event of item while passing (e.g. a link) */
  handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
  };

  /* add class .over while hovering other items */
  handleDragEnter = (event) => {
    if (event.target.tagName === 'LI') {
      this.setState({ 
        classNameDD: {
          classN: 'over',
          id: Number(event.target.id) 
        }
      });
    }
  };

  /* remove class .over when not hovering over an item anymore */
  handleDragLeave = (event) => {
    this.setState({ 
      classNameDD: {
        classN: '',
        id: Number(event.target.id) 
      }
    });
  };

  handleDrop = (event) => {
    const { roadmap: sortedList, sourceElement } = this.state;
    /* prevent redirect in some browsers */
    event.stopPropagation();
    
    /* only do something if the dropped on item is 
    different to the dragged item */
    if (sourceElement !== event.target) {
      /* remove dragged item from list */
      const list = sortedList.filter((item) => item.id.toString() !== sourceElement.id);

      /* this is the removed item */
      const removed = sortedList.filter((item) => item.id.toString() === sourceElement.id)[0];

      /* insert removed item after this number. */
      const insertAt = Number(event.target.id);

      let tempList = [];

      /* if dropped at last item, don't increase target id by +1. 
         max-index is arr.length */
      if (insertAt >= list.length) {
        tempList = list.slice(0).concat(removed);
        this.setState({
          roadmap: tempList,
          classNameDD: {
            classN: '',
            id: Number(event.target.id) 
          } 
        });
      } else
      if ((insertAt < list.length)) {
      /* original list without removed item until the index it was removed at */
        tempList = list.slice(0, insertAt).concat(removed);

        /* add the remaining items to the list */
        const newList = tempList.concat(list.slice(
          insertAt
        ));

        /* set state to display on page */
        this.setState({
          roadmap: newList,
          classNameDD: {
            classN: '',
            id: Number(event.target.id) 
          } 
        });
      }
    } else {
      this.setState({ 
        classNameDD: {
          classN: '',
          id: Number(event.target.id) 
        }
      });
    }
  };

  handleDragEnd = (event) => {
    this.setState({ 
      classNameDD: {
        classN: '',
        id: Number(event.target.id) 
      }
    });
  };

  render() {
    const {
      roadmap, searchString, searchItems, classNameDD 
    } = this.state;

    return (
      <section className="roadmap" id="roadmap">
        <div className="container">
          <h2>Roadmap</h2>
          <div className="row">
            <div className="col">
              <button type="button" onClick={this.sortItemById} className="btn-registration">Sort by ID</button>
            </div>
            <div className="col">
              <button type="button" onClick={this.sortItemByDate} className="btn-registration">Sort Custom by date</button>
            </div>
            <div className="col">
              <button type="button" onClick={this.addItem} className="btn-registration">Add Item</button>
            </div>
            <div className="col">
              <button type="button" onClick={this.removeItem} className="btn-registration">Remove Item</button>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-xl-3">
              <div className="subscription-form">
                <input type="text" value={searchString} onChange={this.onChangeSearch} placeholder="search by title Roadmap" />
              </div>
            </div>
            <div className="col-xl">
              щоб вибрати перший елемент натисныть Комбінацію 
              {' '}
              <code>q</code>
            </div>
          </div>
          <RoadmapViewList 
            classDragEndDrop={classNameDD}
            dataItems={roadmap} 
            selectItems={searchItems} 
            handleChange={this.parentHandleChange}
            DragStart={this.handleDragStart}
            DragOver={this.handleDragOver}
            DragEnter={this.handleDragEnter}
            DragLeave={this.handleDragLeave}
            Drop={this.handleDrop}
            DragEnd={this.handleDragEnd}
          />
        </div>
      </section>
    ); 
  }
}

export default Roadmap;
