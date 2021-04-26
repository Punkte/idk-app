import Create from "./Pages/Create";
import Film from "./Pages/Film";
import Home from "./Pages/Home";

export default [
  {
    title: 'Home',
    to: '/',
    children: Home,
    exact: true,
    meta: {
      inMenu: true,
    }
  },
  {
    title: 'Create',
    to: '/create',
    children: Create,
    meta: {
      inMenu: true,
    }
  },
  {
    title: 'Film',
    to: '/film/:id',
    children: Film,
    meta: {
      inMenu: false,
    }
  }
]