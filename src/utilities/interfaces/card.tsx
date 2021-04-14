export interface ServerData {
    data: {type?: string, id?: string, attributes: ServerDataAttributes};
    links?: any;
    meta?: any;
}

export interface ServerDataAttributes {
    type?: string;
    id?: string;
    path?: string;
    title?: string;
    description?: string;
    parameters?: {q: string};
    currency_code?: string;
    cards: CardData[];
    artist?: string|null|undefined;
    components?: any;
    breadcrumbs?: any;
    filters?: any;
}

export interface CardData {
    type: string;
    id: string;
    card: Card;
    product: CardProduct;
    artist: CardArtist;
}

export interface ImageDimensions {
    id: string;
    width: number;
    height: number;
}

export interface CardImage {
    dimensions: ImageDimensions;
    src: string;
    alt: string;
}

export interface CardProduct {
    price: number;
    discount_price: number;
    promote_cnt: number;
    mpn: string;
    creative: {slug: string; legacy_id: string};
    productType: {display_name: string; slug: string; department_slug: string; department_display_name: string};
}

export interface CardArtist {
    display_name: string;
    username: string;
}

export interface Card {
    title: string;
    image: CardImage;
    link: {href: string};
}