import {
    countries,
    Country,
    CountryCode,
    CountryDialCode,
    CountryName,
} from "./countries";

type GetCountry = (countryCode: CountryCode) => Country | undefined;
type GetCountryByName = (countryName: CountryName) => Country | undefined;
type GetCountryByDial = (dial: CountryDialCode) => Country | undefined;

export const getCountry = (countryCode: CountryCode) =>
    countries.find((country) => country.code === countryCode);

export const getCountryByCode = getCountry;

export const getCountryByName = (n: CountryName) =>
    countries.find((country) => country.name === n);

export const getCountryByDial = (d: CountryDialCode) =>
    countries.find((country) => country.dial_code === d);
