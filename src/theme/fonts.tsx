import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* NanumSquare */
      @font-face {
        font-family: 'NanumSquare';
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareR.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 800;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareEB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquare';
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareL.ttf) format('truetype');
       }
       /* AC */
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 400;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcR.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 700;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 800;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcEB.ttf) format('truetype');
       }
       @font-face {
        font-family: 'NanumSquareAc';
        font-weight: 300;
        src: url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.eot);
        src: local('☺'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.eot?#iefix) format('embedded-opentype'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.woff2) format('woff2'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.woff) format('woff'),
             url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/NanumSquareAcL.ttf) format('truetype');
       }


      /* Inter min Ver */
      @font-face{font-family:inter;font-style:normal;font-weight:400;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:400;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Italic.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:100;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Thin-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:100;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-ThinItalic-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:200;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-ExtraLight-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:200;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-ExtraLightItalic-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:300;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Light-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:300;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-LightItalic-BETA.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:500;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Medium.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:500;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-MediumItalic.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:600;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-SemiBold.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:600;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-SemiBoldItalic.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:700;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:700;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-BoldItalic.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:800;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-ExtraBold.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:800;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-ExtraBoldItalic.woff) format('woff')}@font-face{font-family:inter;font-style:normal;font-weight:900;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-Black.woff) format('woff')}@font-face{font-family:inter;font-style:italic;font-weight:900;src:local('Inter'),url(https://fonts.cdnfonts.com/s/19795/Inter-BlackItalic.woff) format('woff')}
      `}
  />
)

export default Fonts