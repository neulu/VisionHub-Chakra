import * as React from 'react'
import {Global} from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css */

      /* NanumSquare */
      @font-face {
        font-family: 'NanumSquare';
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.eot);
        src: local('☺'),
             url(NanumSquareR.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareR.woff2) format('woff2'),
             url(NanumSquareR.woff) format('woff'),
             url(NanumSquareR.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.eot);
        src: local('☺'),
             url(NanumSquareB.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareB.woff2) format('woff2'),
             url(NanumSquareB.woff) format('woff'),
             url(NanumSquareB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 800;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.eot);
        src: local('☺'),
             url(NanumSquareEB.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareEB.woff2) format('woff2'),
             url(NanumSquareEB.woff) format('woff'),
             url(NanumSquareEB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.eot);
        src: local('☺'),
             url(NanumSquareL.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareL.woff2) format('woff2'),
             url(NanumSquareL.woff) format('woff'),
             url(NanumSquareL.ttf) format('truetype');
       }
       /* AC */
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.eot);
        src: local('☺'),
             url(NanumSquareAcR.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareAcR.woff2) format('woff2'),
             url(NanumSquareAcR.woff) format('woff'),
             url(NanumSquareAcR.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.eot);
        src: local('☺'),
             url(NanumSquareAcB.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareAcB.woff2) format('woff2'),
             url(NanumSquareAcB.woff) format('woff'),
             url(NanumSquareAcB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 800;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.eot);
        src: local('☺'),
             url(NanumSquareAcEB.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareAcEB.woff2) format('woff2'),
             url(NanumSquareAcEB.woff) format('woff'),
             url(NanumSquareAcEB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.eot);
        src: local('☺'),
             url(NanumSquareAcL.eot?#iefix) format('embedded-opentype'),
             url(NanumSquareAcL.woff2) format('woff2'),
             url(NanumSquareAcL.woff) format('woff'),
             url(NanumSquareAcL.ttf) format('truetype');
       }
      `}
  />
)
