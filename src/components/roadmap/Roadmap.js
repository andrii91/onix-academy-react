import { Component } from "react";
import { faker } from "@faker-js/faker";
import RoadmapViewList from "./RoadmapViewList"

const data = [
  {
    id: 4,
    title : "Launch Alpha Version",
    info : "18 June 2021",
    complete : 1,
    builder: {
        firstName: 'Jon',
        lastName: 'Dou',
    },
    date: '12/31/1993',
  },
  {
    id: 6,
    title : "User Aquisition Tests",
    info : "Conversion grow to 49% ",
    complete : 1,
    builder: {
        firstName: 'Vasia',
        lastName: 'Pupkin',
    },
    date: '01/26/2012',
  },
  {
    id: 2,
    title : "NFT Player Avatars",
    info : "Febrary 2022",
    complete : 0,
    builder: {
        firstName: 'Vykola',
        lastName: 'Sikira',
    },
    date: '01/26/2021',
  },
  {
    id: 1,
    title : "NFT Marketplace",
    info : "Febrary 2022",
    complete : 0,
    builder: {
        firstName: 'Don',
        lastName: 'Penenyon',
    },
    date: '05/26/2022',
  },
  {
    id: 13,
    title : "Support 10 languages",
    info : "Febrary 2022",
    complete : 0,
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
      roadmap: data
    };
  }

  addItem = () => {
    const newItem = {
      id: (new Date()).getTime(),
      title : faker.name.jobTitle(),
      info : faker.lorem.text(),
      complete : 1,
      builder: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
      },
      date: new Date().toLocaleDateString('en-US'),
    };

    this.setState(({roadmap}) => ({ roadmap: [...roadmap, newItem] }));

  }

  removeItem = () => {
    const { roadmap: roadmapData } = this.state;
        roadmapData.pop();

    this.setState({ roadmap: roadmapData });
  }

  sortItemById = () => {
    const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

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

  render() {
    const {roadmap} = this.state;

    return (
        <section className="roadmap" id="roadmap">
            <div className="container">
              <h2>Roadmap</h2>
              <div className="row">
                <div className="col">
                  <button onClick={this.sortItemById} className="btn-registration">Sort by ID</button>
                </div>
                <div className="col">
                  <button onClick={this.sortItemByDate} className="btn-registration">Sort Custom by date</button>
                </div>
                <div className="col">
                  <button onClick={this.addItem} className="btn-registration">Add Item</button>
                </div>
                <div className="col">
                  <button onClick={this.removeItem} className="btn-registration">Remove Item</button>
                </div>
              </div>
              <RoadmapViewList dataItems={roadmap} />
            </div>
      </section>
    ); 
  }
}

export default Roadmap;
