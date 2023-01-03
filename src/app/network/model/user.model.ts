export interface Users{
    id:number,
    name:string,
    username:string,
    email:string,
    address:address,
    phone:string,
    website:string,
    company:CompanyModel
}

export interface address{
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:location
}

export interface location{
  lat:number;
  lng:number;
}

export interface CompanyModel{
    name:string,
    catchPhrase:string;
    bs:string;
}


// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
