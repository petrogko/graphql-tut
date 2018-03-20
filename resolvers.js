const authors = [
  {
    id:5,
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter', 'HP2']
  },
  {
    id: 10,
    name: 'George RR Martin',
    age: 70,
    books: ['Game of Thrones']
  },
  {
    id: 15,
    name: 'Some Random',
    age: 19,
    books: ['Magic Book', "2"]
  }
];

const resolvers = {
  Query: {
    authors: () => {
      return authors
    },
    author: (root, {id}) => {
      return authors.find(author => author.id === id);
    }
  }
}

export default resolvers;
