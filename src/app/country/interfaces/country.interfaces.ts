export enum Region{
    Africa = 'Africa',
    America = 'America',
    Asia = 'Asia',
    Oceania = 'Oceania',
    Europa = 'Europe'
}

export interface SmallCountry{
    name: string;
    cca3: string;
    borders: string[];
}

export interface Country {
    name:         Name;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string;
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currencies {
    EUR?: All;
    RUB?: All;
    CZK?: All;
    UAH?: All;
    ISK?: All;
    NOK?: All;
    GBP?: All;
    GGP?: All;
    RSD?: All;
    GIP?: All;
    SEK?: All;
    DKK?: All;
    IMP?: All;
    HUF?: All;
    ALL?: All;
    CHF?: All;
    JEP?: All;
    MDL?: All;
    MKD?: All;
    RON?: All;
    PLN?: All;
    BAM?: BAM;
    BYN?: All;
    FOK?: All;
    BGN?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
