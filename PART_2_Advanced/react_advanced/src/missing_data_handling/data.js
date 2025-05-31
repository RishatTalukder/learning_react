export const data = [
  {
    id: 1,
    name: {
      full: "John Doe",
      nickname: "Johnny",
    },
    images: [{
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s",
      cover: "https://example.com/cover.jpg",
    }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "New York, USA",
  },
  {
    id: 2,
    name: {
      full: "Jane Smith",
      nickname: "Janey",
    },
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Los Angeles, USA",
  },
  {
    id: 3,
    name: {
      full: "Alice Johnson",
    },
    description: null, // missing description
    location: "Chicago, USA",
  },
];