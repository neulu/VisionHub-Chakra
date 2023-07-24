import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

// responsive Width
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
  xl: '1600px',
  '2xl': '1900px',
}

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
  },
}


// 3. extend the theme
const theme = extendTheme(
  { 
    breakpoints,
    config,
    spacing ,
    // colors: {
    //   blackAlpha: {
    //     750: "RGBA(0, 0, 0, 0.70)",
    //   },
    // },
  },
  {
    styles: {
      global: {
        'html, body': {
          // 1rem 기준 =>> 16px
          fontFamily: 'NanumSquare',
          fontSize: '16px', 
          lineHeight: '1',
          transition: 'all 0.5s ease',
          '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
            fontSize: '30px !important',
            lineHeight: '1 !important',
          },
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
            backgroundColor: '#fff',
          },
          
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ddd',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '2px solid transparent',
          },
          
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#fff',
            borderRadius: '10px',
          },
        },
      },
    },
  },
  {
    components: {
      Container: {
        baseStyle: {
          w: '100%',
          maxW: '100%',
          p: '0',
        },
      },
      Heading: {
        baseStyle: {
          fontWeight: '600',
          fontFamily: 'NanumSquare',
          m : '0',
        },
      },
      Breadcrumb: {
        baseStyle: {
          list: {
            // fontFamily: 'NanumSquare',
            color: '#000',
            fontWeight: '600',
          },
          // item: {
          // },
        },
      },
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 6,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          },
          typeWrite: {
            container: {
              pos: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              p: '10px 0',
              label: {
                display: 'flex',
                w: '200px',
                fontWeight: 'bold',
                color: '#000',
                m: '7px 0 0 0',
              },
            },
          },
          typeWriteSm: {
            container: {
              pos: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              p: '10px 0',
              label: {
                display: 'flex',
                w: '180px',
                fontWeight: 'bold',
                color: '#000',
                m: '7px 0 0 0',
              },
            },
          },
          typeModal: {
            container: {
              pos: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              p: '14px 0',
              label: {
                display: 'flex',
                w: '180px',
                fontSize: '18px',
                color: '#000',
                m: '7px 0 0 0',
              },
            },
          },
        }
      },
      Button: {
         baseStyle: {
          minWidth: 'auto',
          fontFamily: 'NanumSquare',
          fontWeight: '400',
          lineHeight: '1',
          borderRadius: '3px',
        },
        variants: {
          solid: {
            minWidth: 'auto',
            h: '39px',
            color: '#fff',
            padding: '0 10px',
            bg: '#4d4d4d',
            '&:hover': {
              bg: '#222',
            },
          },
          typeIcon: {
            pos: 'relative',
            w: '24px',
            minW: 'auto',
            h: '24px',
            fontSize: '24px',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0',
            bg: 'none',
          },
          typeIconSm: {
            pos: 'relative',
            w: '12px',
            minW: 'auto',
            h: '12px',
            fontSize: '12px',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0',
            bg: 'none',
          },
          whiteRoundBtn: {
            h: '26px',
            fontSize: '14px',
            color: '#000',
            borderRadius: 'full',
            padding: '0 15px',
            border: 'solid 1px #e5e5e5',
            '&:hover': {
              bg: '#eee',
            },
          },
          grayRoundBtn: {
            h: '28px',
            color: '#000',
            borderRadius: 'full',
            padding: '0 10px',
            bg: '#999',
            '&:hover': {
              color: '#fff',
              bg: '#000',
            },
          },
          typeGrayBtn: {
            color: '#000',
            padding: '0 10px',
            bg: '#999',
            '&:hover': {
              color: '#fff',
              bg: '#000',
            },
          },
          typeGrayBtnLg: {
            h: '43px',
            fontWeight: '400',
            color: '#000',
            padding: '0 35px',
            m: '0 5px',
            bg: '#b3b3b3',
            '&:hover': {
              bg: '#ccc',
            },
          },
          typeWhiteBtnSm: {
            h: '32px',
            fontSize: '14px',
            fontWeight: '400',
            color: 'blackAlpha.800',
            border: 'solid 1px #e5e5e5',
            padding: '0 10px',
            ml: '10px',
            bg: '#fff',
            '&:hover': {
              bg: '#eee',
            },
          },
          typeBlackBtnSm: {
            h: '32px',
            fontSize: '14px',
            fontWeight: '400',
            color: '#fff',
            border: 'solid 1px #2D2D2D',
            padding: '0 10px',
            ml: '10px',
            bg: '#2D2D2D',
            '&:hover': {
              bg: '#444',
            },
          },
          typeBlackBtnLg: {
            h: '43px',
            fontWeight: '400',
            color: '#fff',
            padding: '0 35px',
            m: '0 5px',
            bg: '#4d4d4d',
            '&:hover': {
              bg: '#222',
            },
          },
          typeSimple: {
            h: '30px',
            fontWeight: '600',
            color: '#000',
            borderRadius: '5px',
            padding: '0 5px',
            m: '5px 0',
            bg: '#eee',
            '&:hover': {
              bg: '#ccc',
            },
          },
          paginationBtn: {
            minW: 'auto',
            color: '#000',
            padding: '0 7px',
            '&:hover': {
              textDecoration: 'underline',
            },
            '&:active': {
              fontWeight: 'bold',
              color: '#005FB8',
              textDecoration: 'underline',
            },
          },
          paginationIconBtn: {
            minW: 'auto',
            fontSize: '24px',
            color: 'blackAlpha.300',
            padding: '0',
            '&:hover': {
              color: 'blackAlpha.700',
            },
          },
          typePopoverBtn: {
            pos: 'relative',
            w: '20px',
            minW: 'auto',
            h: '20px',
            fontSize: '24px',
            color: 'blackAlpha.300',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0 0 0 7px',
            bg: 'none',
            '&:hover': {
              color: 'blackAlpha.700',
            },
            '&[aria-expanded=true]': {
              color: 'blackAlpha.700',
            },
          },
          typeSelectBtn: {
            border: 'solid 1px #e5e5e5',
            padding: '0 10px 0 15px',
            background: '#fff',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeSelectBtnLineNone: {
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '0 10px 0 0',
            background: 'transparent',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeSelectWriteBtn: {
            w: 'calc(100% - 200px)',
            h: '32px',
            textAlign: 'left',
            border: 'solid 1px #e5e5e5',
            padding: '0 10px 0 15px',
            background: '#fff',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeSelectBtnSm: {
            w: 'calc(100% - 180px)',
            h: '32px',
            textAlign: 'left',
            border: 'solid 1px #e5e5e5',
            padding: '0 10px 0 15px',
            background: '#fff',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeSelectModalBtn: {
            w: 'calc(100% - 180px)',
            h: '32px',
            textAlign: 'left',
            border: 'solid 1px #e5e5e5',
            padding: '0 10px 0 15px',
            background: '#fff',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
        },
        // defaultProps: {
        //   size: 'md', // default is md
        //   variant: 'solid', // default is solid
        //   colorScheme: 'blackAlpha', // default is gray
        // },
      },
      Table: {
        variants: {
            simple: {
              caption : {
                display: 'none',
              },
              th: {
                h: '36px',
                textTransform: "none",
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'NanumSquare',
                lineHeight: '1.3',
                color: '#000',
                textAlign: 'center',
                p: '7px 5px',
                bg: '#ccc',
              },
              td: {
                fontFamily: 'NanumSquare',
                fontSize: '16px',
                lineHeight: '1.3',
                color: '#888',
                textAlign: 'center',
                borderColor: '#ccc',
                p: '21px 5px 17px',
                wordBreak: 'break-all',
                whiteSpace: 'normal',
                fontVariantNumeric: 'normal',
                _last: {
                  bgImage: "url('/assets/images/icons/ico-arrow-01.svg')",
                  bgPosition: 'calc(100% - 5px) center',
                  bgRepeat: 'no-repeat',
                }
              },
              // tr: {
              //   '&:hover': {
              //     td: {
              //       backgroundColor: '#f9f9f9',
              //     }
              //   },
              // },
            }
        }
      },
      Badge: {
        variants: {
          alarm: {
            pos: 'absolute',
            right: '0',
            top: '0',
            display: 'inline-block',
            width: '4px',
            height: '4px',
            borderRadius: '10px',
            fontSize: '0',
            p: '0px',
            bg: '#ff0000',
          },
          state: {
            w: '90px',
            h: '21px',
            fontSize: '16px',
            lineHeight: '21px',
            color: '#888',
            fontWeight: 'normal',
            textAlign: 'center',
            p: '0',
            bg: '#e5e5e5',
          },
          category: {
            h: '28px',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#000',
            fontWeight: 'normal',
            borderRadius: 'full',
            p: '0px 15px',
            mr: '30px',
            bg: '#999',
          },
          point: {
            fontSize: '16px',
            color: '#e79494',
            fontWeight: 'normal',
            p: '0px',
            textTransform: 'none',
          },
          filter: {
            textTransform: "none",
            display: 'flex',
            alignItems: 'center',
            h: '38px',
            fontSize: '16px',
            color: '#000',
            fontWeight: '300',
            borderRadius: 'full',
            bg: '#e5e5e5',
            p: '0 10px',
            m: '0 0 0 10px',
          },
        }
      },
      Tooltip: {
        baseStyle: {
          fontSize: '14px',
          fontWeight: '200',
          lineHeight: '1',
          borderRadius: '4px',
          color: '#fff',
          p: '5px 10px',
          bg: '#2d3748',
        },
      },
      Switch: {
        variants: {
          default: {
            track: {
              width: '36px',
              height: '16px',
              p: '0',
              border: 'solid 1px #888',
              background: '#fff',
              '&[data-checked]' : {
                borderColor: '#005FB8',
                background: '#005FB8',
              },
            },
            thumb: {
              width: '12px',
              height: '12px',
              m: '2px',
              background: '#888',
              '&[data-checked]' : {
                background: '#fff',
                transform: 'translateX(20px)',
              },
            },
          },
        },
        
      },
      Modal: {
        baseStyle: {
          dialog: {
            w: '640px',
            maxW: 'auto',
          },
          closeButton: {
            // display: 'none',
            top: '30px',
            right: '30px',
            fontSize: '20px',
          },
          header: {
            fontSize: '26px',
            fontWeight: '600',
            color: '#000',
            p: '35px 30px 20px',
          },
          body: {
            p: '0px 40px 10px',
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },
            
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          },
          footer: {
            justifyContent: 'center',
            p: '10px 0px 30px',
          },
        },
      },
      Popover: {
        baseStyle: {
          content: {
            maxWidth: '400px',
            width: 'auto',
            lineHeight: '1.3',
            p: '20px 20px 15px',
          },
          body: {
            p: '0',
          },
          footer: {
            textAlign: 'right',
            p: '10px 30px 35px',
            border: 'none',
          }
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              height: '39px',
              border: 'solid 1px #e5e5e5',
              borderRadius: '3px',
              '&::placeholder': {
                // fontSize: '16px',
                color: 'blackAlpha.600',
                fontWeight: '200',
              },
            },
          },
          typeLogin: {
            field: {
              height: '39px',
              border: 'solid 1px #dedede',
              borderRadius: '3px',
              // '&:focus': {
              //   borderColor: '#3725FF',
              // },
            },
          },
          typeWrite: {
            field: {
              w: 'calc(100% - 200px)',
              height: '32px',
              border: 'solid 1px #dedede',
              borderRadius: '3px',
              '&::placeholder': {
                color: 'blackAlpha.600',
              },
              '&:focus': {
                borderColor: '#3725FF',
              },
            },
          },
          typeWriteSm: {
            field: {
              w: 'calc(100% - 180px)',
              height: '32px',
              border: 'solid 1px #dedede',
              borderRadius: '3px',
              '&::placeholder': {
                color: 'blackAlpha.600',
              },
              '&:focus': {
                borderColor: '#3725FF',
              },
            },
          },
        }
      },
      Textarea: {
        variants: {
          typeWrite: {
            resize: 'none',
            w: 'calc(100% - 200px)',
            height: '150px',
            border: 'solid 1px #dedede',
            borderRadius: '3px',
            '&::placeholder': {
              color: 'blackAlpha.600',
            },
            '&:focus': {
              borderColor: '#3725FF',
            },
          },
          typeModal: {
            resize: 'none',
            w: 'calc(100% - 180px)',
            height: '70px',
            border: 'solid 1px #dedede',
            borderRadius: '3px',
            '&::placeholder': {
              color: 'blackAlpha.600',
            },
          },
        }
      },
      Menu: {
        variants: {
          typeSelect: {
            button: {
            },
            list: {
              // w: '120px',
              minWidth: 'auto',
              p: '0',
              marginTop:'-5px',
              borderRadius: '3px',
              bg: '#fff',
              maxHeight: '300px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
            // groupTitle: {
            // },
            // command: {
            // },
            // divider: {
            // },
          },
          typeWrite: {
            button: {
            },
            list: {
              w: '1070px', //calc(100% - 200px)',
              p: '0',
              marginTop:'-5px',
              borderRadius: '3px',
              border: 'solid 1px #dedede',
              bg: '#fff',
              maxHeight: '300px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
          typeFlexible: {
            button: {
            },
            list: {
              // w: '1070px',
              p: '0',
              marginTop:'-5px',
              borderRadius: '3px',
              border: 'solid 1px #dedede',
              bg: '#fff',
              maxHeight: '300px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
          typeModal: {
            button: {
            },
            list: {
              w: '380px', //calc(100% - 200px)',
              p: '0',
              marginTop:'-5px',
              borderRadius: '3px',
              border: 'solid 1px #dedede',
              bg: '#fff',
              maxHeight: '200px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
        }
      },
      Text: {
        baseStyle: {
          m: '0',
        },
        variants: {
          typeTitleSm: {
            fontSize: '14px',
            fontWeight: '700',
            color: '#000',
            p: '0',
            m: '0 0 20px',
          },
          typeTitleMd: {
            fontWeight: '700',
            color: '#666',
            p: '0',
            m: '0 0 20px',
          },
          typeTitleLg: {
            fontSize: '18px',
            fontWeight: '400',
            color: '#000',
            p: '0',
            m: '0',
          },
          typeTitleXl: {
            fontSize: '30px',
            fontWeight: '400',
            color: '#000',
            p: '0',
            m: '0 0 25px',
          },
          typeDltSm: {
            w: '85px',
            fontWeight: 'bold',
            color: '#666',
          },
          typeDldSm: {
            w: 'calc(100% - 85px)',
            color: '#666',
          },
          typeDltLg: {
            w: '200px',
            fontWeight: 'bold',
            color: '#000',
          },
          typeDldLg: {
            w: 'calc(100% - 200px)',
            color: '#666',
          },
          typeDltXl: {
            fontSize: '18px',
            fontWeight: '900',
            color: '#000',
          },
          typeDldXl: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#000',
          },
          typeAlarm: {
            color: '#000',
            fontWeight: 'bold',
          },
          typeDate: {
            color: '#000',
          },
          typeDesc: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000',
          },
          typeDescMd: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#000',
          },
        }
      },
    }
  }
)

export default theme


/*
Select: {
        variants: {
          outline: {
            field: {
              height: '39px',
              borderRadius: '3px',
              // p: '20px',
              // m: '10px',
              // fontSize: 'lg',
              px: '4',
              h: '12',
            },
            icon: {
              // pr: '0',
              '&[data-focus]' : {
                background: '#000',
                transform: 'translateY(0%)',
              },
            }
          },
          unstyled: {
            field: {
              fontSize: '18px',
              fontWeight: 'bold',
            },
            icon: {
              // pr: '0',
            }
          }
        }
      },
*/


/* spacing 기준 [16px]
Name	Space	Pixels
px  	1px 	1px	
0.5	0.125rem	2px	
1	0.25rem	4px	
1.5	0.375rem	6px	
2	0.5rem	8px	
2.5	0.625rem	10px	
3	0.75rem	12px	
3.5	0.875rem	14px	
4	1rem	16px	
5	1.25rem	20px	
6	1.5rem	24px	
7	1.75rem	28px	
8	2rem	32px	
9	2.25rem	36px	
10	2.5rem	40px	
12	3rem	48px	
14	3.5rem	56px	
16	4rem	64px	
20	5rem	80px	
24	6rem	96px	
28	7rem	112px	
32	8rem	128px	
36	9rem	144px	
40	10rem	160px	
44	11rem	176px	
48	12rem	192px	
56	14rem	224px	
60	15rem	240px	
64	16rem	256px	
72	18rem	288px	
80	20rem	320px	
96	24rem	384px
*/