export type Pokemon = {
    name: string,
    description: string,
    types: string[],
    zone: Zone,
    attacks: Attack[]
  }
  
  export type Attack = {
    name: string,
    power: number,
  }
  
  export type Zone = {
    name: string,
    description: string,
  }