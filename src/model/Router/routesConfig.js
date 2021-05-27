const routes = [
  { label: 'Статистика', path: '/' },
  { label: 'Панель', path: '/panel' },
  { label: 'О проекте', path: '/about' },
];

const comparePath = (path) => {
  if (path.includes('/statistics/')) {
    const pathArr = path.split('/');
    const id = pathArr[pathArr.length - 1];
    return Number(id) ? `Парковка ${id}` : '';
  };
  const route = routes.find(r => r.path === path);
  const label = route ? route.label : '';
  return label;
};

const publicNav = [
  { label: 'Статистика', path: '/' },
  { label: 'О проекте', path: '/about' },
  { label: 'Вход', path: '/login' },
];

const privateNav = [
  { label: 'Панель', path: '/panel' },
  { label: 'Статистика', path: '/' },
  { label: 'О проекте', path: '/about' },
  { label: 'Выход', path: '/logout' },
];

export { routes, publicNav, privateNav, comparePath };