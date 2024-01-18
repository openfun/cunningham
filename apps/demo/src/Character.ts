import { faker } from "@faker-js/faker";

export interface Character {
  id: string;
  name: string;
  gender: "male" | "female" | "other";
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
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Joanie Cunningham",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Arthur Fonzarelli",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Marion Cunningham",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Ralph Malph",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Howard Cunningham",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Marsha Simms",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Warren Berlinger",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Al Molinaro",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Verna LaVerne",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Arnold Takahashi",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Linda Purl",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Crystal Bernard",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Heather O'Rourke",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Scott Bernstein",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Ed Peck",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Beatrice Colen",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Dody Goodman",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Linda Dano",
    gender: "female",
    isGuest: false,
    ...randomDates(),
  },
  {
    id: faker.string.uuid(),
    name: "Gavan O'Herlihy",
    gender: "male",
    isGuest: false,
    ...randomDates(),
  },
];
