import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.js';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import '@/utils/reset.css'
createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<RouterProvider  router={router}>  
</RouterProvider> 
</Provider>  
);
