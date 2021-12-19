import { Note, Home, Training } from './pages';

export const routes = [
  {
    element: Home,
    label: 'HOME',
    path: '/home',
  },
  {
    element: Note,
    label: 'NOTE',
    path: '/note',
  },
  {
    element: Training,
    label: 'TRAINING',
    path: '/training',
  },
];
