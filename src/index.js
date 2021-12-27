import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <App />
      </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
