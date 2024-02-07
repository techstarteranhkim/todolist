// ESM
import { faker } from "@faker-js/faker";

const DatabaseResponse = {
  profile: {
    username: faker.person.firstName("female"),
    age: Math.floor(Math.random() * (80 - 18 + 1)) + 18, //Generiert alter 18-80
    followerCount: faker.number.int(10000),
    followingCount: faker.number.int(100),
    postCount: faker.number.int(20),
    avatar: faker.image.cats(100, 100, false),
  },
  posts: [
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
  ],
};

export default DatabaseResponse;
