import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Pretendard */
      @font-face {
            font-family: 'Pretendard';
            src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
        }

      /* SUIT */
      @font-face {
            font-family: 'SUIT';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }
      `}
  />
)

export default Fonts