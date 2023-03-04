import { Component } from "react";

class Roadmap extends Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        "title" : "Launch Alpha Version",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "User Aquisition Tests",
        "info" : " ",
        "complete" : 1
      },
      {
        "title" : "Add async multiplayer",
        "info" : "Conversion grow to 49%",
        "complete" : 1
      },
      {
        "title" : "Launch Beta Version",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "User Aquisition Tests",
        "info" : " ",
        "complete" : 1
      },
      {
        "title" : "Add 2 word game mechanics",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "Magic Chests Beta",
        "info" : "Conversion grow to 49%",
        "complete" : 1
      },
      {
        "title" : "Add 350+ words",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "Launch promo web site",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "Word decks",
        "info" : "18 June 2021",
        "complete" : 1
      },
      {
        "title" : "Private sale on Seedify logo",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Redesign game",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Championships",
        "info" : "March 2022",
        "complete" : 0
      },
      {
        "title" : "Soft launch in Canada",
        "info" : "March 2022",
        "complete" : 0
      },
      {
        "title" : "User Aquisition Tests",
        "info" : "March 2022",
        "complete" : 0
      },
      {
        "title" : "Presale and token listing on Gate.io",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "In-game token word",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Artists word decks and special events",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Support 5 languages",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Soft launch in countries with 5 languages",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "NFT presale on Binance NFT",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Token listing on Binance ",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "NFT word decks",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Add 2 word game mechanics",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "NFT Player Avatars",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "NFT Marketplace",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Support 10 languages",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Worldwide release",
        "info" : "Febrary 2022",
        "complete" : 0
      },
      {
        "title" : "Special events and promo for Artists Decks",
        "info" : "Febrary 2022",
        "complete" : 0
      }
    ];
  }

  render() {
    return (
        <section class="roadmap" id="roadmap">
            <div class="container">
            <h2>Roadmap</h2>
            <h5>Completed</h5>
            <ul class="roadmap-list" id="completed">
              <li>
                <h6>
                  <svg viewBox="0 0 32 33" width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.73 8.969a1.6 1.6 0 0 1 0 2.262l-12.8 12.8a1.6 1.6 0 0 1-2.262 0l-6.4-6.4A1.6 1.6 0 0 1 7.53 15.37l5.269 5.269 11.669-11.67a1.6 1.6 0 0 1 2.262 0Z" fill="#fff"/></svg>
                  <span>titile</span>
                </h6>
                <p>info</p>
              </li>
            </ul>
            <a href="#completed" class="show-more">Show full list </a>
            
            <h5 class="mt-56">Upcoming</h5>
            <div class="upcoming-item" id="upcoming">
                <div class="title"></div>
                <div class="info"></div>
                <a href="#subscription" rel="modal:open" class="upcoming-link">Notify me</a>
            </div>
            
            <h5>Planned</h5>
            <ul class="roadmap-list" id="planned">
              <li>
                <h6>
                  <svg viewBox="0 0 32 33" width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.73 8.969a1.6 1.6 0 0 1 0 2.262l-12.8 12.8a1.6 1.6 0 0 1-2.262 0l-6.4-6.4A1.6 1.6 0 0 1 7.53 15.37l5.269 5.269 11.669-11.67a1.6 1.6 0 0 1 2.262 0Z" fill="#fff"/></svg>
                  <span>titile</span>
                </h6>
                <p>info</p>
              </li>
            </ul>
            <a href="#planned" class="show-more">Show full list </a>
            </div>
      </section>
    ); 
  }
}

export default Roadmap;
