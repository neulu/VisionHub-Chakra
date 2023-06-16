import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { store } from 'store'
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

/** ToastContainer for Chakra */
import { createStandaloneToast } from '@chakra-ui/toast'

// import { extendTheme } from '@chakra-ui/react';

/** add Theme */
import  theme from 'theme/theme';

const { ToastContainer } = createStandaloneToast()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>   ### StrictMode 시 페이지 로딩이 2번 실행 (검증을 위해 1번) ###
    <Provider store={store}>
      <ChakraProvider theme={theme} >
        <App />
        <ToastContainer />
      </ChakraProvider>
    </Provider>
  // </React.StrictMode>
);