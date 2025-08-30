export interface UserStoryType {
  firstName: string;
  id: number;
  profileImage: Object;
}

const userStories = <UserStoryType[]>[
  {
    firstName: "Joseph",
    id: 1,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Angel",
    id: 2,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "White",
    id: 3,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Olivier",
    id: 4,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Nata",
    id: 5,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Nicolas",
    id: 6,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Nino",
    id: 7,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Nana",
    id: 8,
    profileImage: require("./assets/images/default_profile.png"),
  },
  {
    firstName: "Adam",
    id: 9,
    profileImage: require("./assets/images/default_profile.png"),
  },
];

export interface UserPostType {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: Object;
  profileImage: Object;
  id: number;
}

export const userPosts = <UserPostType[]>[
  {
    firstName: "Allison",
    lastName: "Becker",
    location: "Boston, MA",
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    image: require("./assets/images/default_post.png"),
    profileImage: require("./assets/images/default_profile.png"),
    id: 1,
  },
  {
    firstName: "Jennifer",
    lastName: "Wilkson",
    location: "Worcester, MA",
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    image: require("./assets/images/default_post.png"),
    profileImage: require("./assets/images/default_profile.png"),
    id: 2,
  },
  {
    firstName: "Adam",
    lastName: "Spera",
    location: "Worcester, MA",
    likes: 100,
    comments: 8,
    bookmarks: 3,
    image: require("./assets/images/default_post.png"),
    profileImage: require("./assets/images/default_profile.png"),
    id: 3,
  },
  {
    firstName: "Nata",
    lastName: "Vacheishvili",
    location: "New York, NY",
    likes: 200,
    comments: 16,
    bookmarks: 6,
    image: require("./assets/images/default_post.png"),
    profileImage: require("./assets/images/default_profile.png"),
    id: 4,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("./assets/images/default_post.png"),
    profileImage: require("./assets/images/default_profile.png"),
    id: 5,
  },
];

export default userStories;
