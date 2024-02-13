import { faker } from "@faker-js/faker";

export interface Character {
  id: string;
  name: string;
  sex: "male" | "female";
  birthDate: Date;
  firstAppearanceDate: Date;
  lastAppearanceDate: Date;
  isGuest: boolean;
}

export const randomDates = () => {
  return {
    birthDate: faker.date.between({
      from: "1950-01-01T00:00:00.000Z",
      to: "1970-01-01T00:00:00.000Z",
    }),
    firstAppearanceDate: faker.date.between({
      from: "1974-01-01T00:00:00.000Z",
      to: "1984-01-01T00:00:00.000Z",
    }),
    lastAppearanceDate: faker.date.past(),
  };
};

export const database: Character[] = [
  {
    id: faker.string.uuid(),
    name: "Richie Cunningham",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Joanie Cunningham",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Arthur Fonzarelli",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Marion Cunningham",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Ralph Malph",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Howard Cunningham",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Marsha Simms",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Warren Berlinger",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Al Molinaro",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Verna LaVerne",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Arnold Takahashi",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Linda Purl",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Crystal Bernard",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Heather O'Rourke",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Scott Bernstein",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Ed Peck",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Beatrice Colen",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Dody Goodman",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Linda Dano",
    sex: "female",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Gavan O'Herlihy",
    sex: "male",
    isGuest: faker.datatype.boolean(),
    ...randomDates(),
  },
];
