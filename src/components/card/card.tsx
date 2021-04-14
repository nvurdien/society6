import React from 'react';
import './card.css';

const Card = (key: string, image: string, image_alt: string, title: string, promote_cnt:number, artist_display_name:string, price:number): React.ReactNode => 
    <div key={key}>
        <div className="uk-card uk-text-center">
            <div className="uk-card-media-top">
                <img src={image} alt={image_alt} />
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title uk-margin-small-right">{title}</h3>
                <button className="uk-button uk-button-link" style={{textDecoration: 'none'}}>
                    <span uk-icon="icon: heart; ratio: .8"></span> {promote_cnt}
                </button>
                <p className="uk-margin-remove-top">{artist_display_name}</p>
                <p>${price}</p>
            </div>
        </div>
    </div>;

export default Card;