import { Experience } from '../../model/experience';
import { Request } from 'express';
const enterprises: Experience[] = require('./data/experience.json');

export function getList(): Experience[] {
  console.log('Succes getList length : ', enterprises.length);
  return enterprises;
}

export function getByName({ params }: Request): Experience | undefined {
  console.log('Succes getbyName name : ', params.name);
  return enterprises.find(experience => {
    return experience.name === params.name;
  });
}
