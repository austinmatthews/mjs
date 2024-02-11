// object literals

// const blogs = [
//   { title: 'why mac and cheese rules', likes: 30 },
//   { title: '10 things to do', likes: 50 },
// ];

// console.log(blogs);

let user = {
  name: 'Austin',
  age: 30,
  email: 'austm14@gmail.com',
  location: 'Atlanta',
  blogs: [
    { title: 'why mac and cheese rules', likes: 30 },
    { title: '10 things to do', likes: 50 },
  ],
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log('The user logged out');
  },
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();
