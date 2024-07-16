import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './presentation/router/router';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '/src/index.css';


const queryClientProvider = new QueryClient();





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)