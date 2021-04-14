import './App.css';
import Card from '../../components/card/card';
import {CardData, ServerData} from '../../utilities/interfaces/card';
import React from 'react';

export default class App extends React.Component<{}, { data: ServerData }> {

  constructor(props:any) {
    super(props);
    this.state = {
      data: {
        data: {
          attributes: {
            cards: []
          }
        }
      }
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

  render(){
    return (
      <div className="uk-padding">
        <div className="uk-child-width-1-3" uk-grid="">
          {
          this.state.data.data.attributes.cards.length > 0 ?
            this.state.data.data.attributes.cards.map(
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