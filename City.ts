import camelCase from 'camelcase'

export interface Connection {
  target: string;
  distance: number;
}

interface CityEntry {
  name: string;
  connections: Connection[];
  bearers: number;
}

export class City {
  name: string;
  id: string;
  connections: Connection[]

  constructor({ name, connections }: CityEntry) {
    this.name = name
    this.id = camelCase(name)
    this.connections = connections
  }

  addConnection(connection: Connection) {
    this.connections.push(connection)
  }
}