export class HispTable {
    headers: Header[];
    metaData: MetaData;
    rows: string[][]
}

export class MetaData {
    items: Items
    dimensions: Dimensions
};
export interface Header {
    name: string,
    column: string
}

export interface Items {
    "202108": Name
    "202109": Name
    "202110": Name
    "202111": Name
    "202112": Name
    "202201": Name
    sB79w2hiLp8: Name
    jUb8gELQApl: Name
    TEQlaapDQoK: Name
    Vth0fbpFcsO: Name
    ou: Name
    OdiHJayrsKo: Name
    O6uvpzGd5pu: Name
    fdc6uOvgoji: Name
    dx: Name
    pe: Name
    Uvn6LCg7dVU: Name
    lc3eMKXaEfw: Name
}

export interface Name {
    name: string;
}

export interface Dimensions {
    dx: string[],
    pe: string[]
    ou: string[],
    co: string[]
}