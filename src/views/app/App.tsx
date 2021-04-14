import './App.css';
import Card from '../../components/card/card';
import {CardData, ServerData} from '../../utilities/interfaces/card';
import React from 'react';

interface AppState {
  data: ServerData;
  sortHeader: string;
  sortType: string;
}

export default class App extends React.Component<{}, AppState> {

  constructor(props:any) {
    super(props);
    this.state = {
      data: {
        data: {
          attributes: {
            cards: []
          }
        }
      },
      sortHeader: 'Price',
      sortType: 'High to Low',
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/dkdemand/plp-exercise/main/search.json')
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data:ServerData) => this.setState({data: data}))
    .catch(err => console.error(err))
  }

  setHeader = (data:string) => this.setState({sortHeader: data})
  setType = (data:string) => this.setState({sortType: data})

  render(){
    const cards = this.state.data.data.attributes.cards;
    if(cards.length > 0) {
      cards.sort((first, second) => {
        switch(this.state.sortType) {
          case 'High to Low':
            if(this.state.sortHeader === 'Price') return second.product.price - first.product.price;
            else return second.product.promote_cnt - first.product.promote_cnt;
          case 'Low to High':
            if(this.state.sortHeader === 'Price') return first.product.price - second.product.price;
            else return first.product.promote_cnt - second.product.promote_cnt;
          default:
            if(this.state.sortHeader === 'Price') return second.product.price - first.product.price;
            else return second.product.promote_cnt - first.product.promote_cnt;
        }
      });
    }
    return (
      <div className="uk-padding">
        <div className="uk-clearfix uk-margin-bottom">
          <div className="uk-float-right">
            <div className="uk-button-group">
              <button className="uk-button uk-button-default">
                {this.state.sortHeader}: {this.state.sortType}
              </button>
              <div className="uk-inline">
                  <button className="uk-button uk-button-default" type="button"><span uk-icon="icon:  triangle-down"></span></button>
                  <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
                      <ul className="uk-nav uk-dropdown-nav uk-link-text">
                        {
                          (this.state.sortHeader === 'Price' && this.state.sortType === 'High to Low') ? null :
                          <li>
                            <span
                            className="" 
                            style={{cursor:'pointer'}} 
                            onClick={() => {
                              this.setHeader('Price'); 
                              this.setType('High to Low')
                            }}
                            >
                              Price: High to Low
                            </span>
                          </li>
                        }
                        {
                          (this.state.sortHeader === 'Price' && this.state.sortType === 'Low to High') ? null :
                          <li>
                            <span 
                            style={{cursor:'pointer'}} 
                            onClick={() => {
                              this.setHeader('Price'); 
                              this.setType('Low to High');
                            }}
                            >
                              Price: Low to High
                            </span>
                          </li>
                        }
                        {
                          (this.state.sortHeader === 'Promote Count' && this.state.sortType === 'High to Low') ? null :
                          <li>
                            <span 
                            style={{cursor:'pointer'}} 
                            onClick={() => {
                              this.setHeader('Promote Count'); 
                              this.setType('High to Low')
                            }}
                            >
                              Promote Count: High to Low
                            </span>
                          </li>
                        }
                        {
                          (this.state.sortHeader === 'Promote Count' && this.state.sortType === 'Low to High') ? null :
                          <li>
                            <span 
                            style={{cursor:'pointer'}} 
                            onClick={() => {
                              this.setHeader('Promote Count'); 
                              this.setType('Low to High')
                            }}
                            >
                              Promote Count: Low to High
                            </span>
                          </li>
                        }
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-child-width-1-3" uk-grid="">
          {
          cards.length > 0 ?
            cards.map(
              (card: CardData, index: number) => 
                Card(
                  `${card.id} ${index}`,
                  card.card.image.src,
                  card.card.image.alt,
                  card.card.title,
                  card.product.promote_cnt,
                  card.artist.display_name,
                  card.product.price
                )) 
              : null
          }
        </div>
      </div>
    );
  }
}