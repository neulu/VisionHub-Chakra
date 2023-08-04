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
      @font-face {
          font-family: 'Pretendard';
          src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
          font-weight: 500;
          font-style: normal;
      }
      @font-face {
          font-family: 'Pretendard';
          src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
          font-weight: 600;
          font-style: normal;
      }
      @font-face {
          font-family: 'Pretendard';
          src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
      }

      /* SUIT */
      @font-face {
          font-family: 'SUIT';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
      }
      @font-face {
          font-family: 'SUIT';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
      }
      @font-face {
          font-family: 'SUIT';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2') format('woff2');
          font-weight: 600;
          font-style: normal;
      }
      @font-face {
          font-family: 'SUIT';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
      }

      `}
  />
)

export default Fonts