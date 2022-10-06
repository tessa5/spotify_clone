import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '23bca54e11msh398931b1805a883p102c57jsn513e0b606057',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
  })