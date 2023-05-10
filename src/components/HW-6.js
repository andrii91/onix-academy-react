import { Component } from 'react';
import { faker } from '@faker-js/faker';
import Image from './image/Image';

class HW6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataApi: [],
      error: '',
    };
  }

  componentDidMount() {
    this.getDataApi();
  }

  getDataApi = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ dataApi: data.results });
    } catch (e) {
      this.setState({ error: e });
    }
  };

  render() {
    const { dataApi, error } = this.state;

    return (
      <section className="unique" id="game">
        <div className="container">
          <h2>
            Get User for API 
            {error}
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>name</th>
                <th>birth_year</th>
                <th>height</th>
                <th>mass</th>
                <th>gender</th>
                <th>url</th>
                <th>created</th>
              </tr>
            </thead>
            <tbody>
              {dataApi.map((item) => (
                <tr key={item.birth_year + item.name}>
                  <td><Image src={faker.image.avatar()} /></td>
                  <td>{item.name}</td>
                  <td>{item.birth_year}</td>
                  <td>{item.height}</td>
                  <td>{item.mass}</td>
                  <td>{item.gender}</td>
                  <td>{item.url}</td>
                  <td>{item.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default HW6;
