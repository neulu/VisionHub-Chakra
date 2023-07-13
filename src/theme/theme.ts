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

    // fonts: {
    //     heading: 'NanumSquareAc',
    //     body: 'NanumSquareAc',
    //   },
    // },
    colors: {
      blackAlpha: {
        750: "RGBA(0, 0, 0, 0.70)",
      },
    },
  },
  {
    styles: {
      global: {
        'html, body': {
          // 1rem 기준 =>> 16px
          fontFamily:'NanumSquare',
          fontSize: '16px', 
          lineHeight: '1',
          letterSpacing: '-1px',
          transition: 'all 0.5s ease',
          'h2': {
            m : '0',
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
          }
        }
      },
      Button: {
        baseStyle: {
          fontFamily:'NanumSquare',
          lineHeight: '1',
          letterSpacing: '-1px',
          borderRadius: '3px',
        },
        sizes: {
          md: {
            minWidth: 'auto',
            h: '39px',
            fontSize: '16px',
            fontWeight: 'normal',
            padding: '0 10px',
            // bg: 'blackAlpha.800',
          },
        },
        variants: {
          solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? 'blackAlpha.100' : 'blackAlpha.750',
            color: props.colorMode === 'dark' ? '#000' : '#fff',
          }),
          grayRoundBtn: {
            h: '28px',
            // fontSize: '24px',
            color: '#000',
            borderRadius: 'full',
            padding: '0 10px',
            bg: '#999',
            '&:hover': {
              color: '#fff',
              bg: '#000',
            },
          },
          paginationBtn: {
            // fontSize: '24px',
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
            fontSize: '24px',
            color: 'blackAlpha.300',
            padding: '0',
            '&:hover': {
              color: 'blackAlpha.700',
            },
          },
          typePopoverBtn: {
            fontSize: '24px',
            color: 'blackAlpha.300',
            padding: '0',
            marginLeft: '4px',
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
          }
        },
        defaultProps: {
          size: 'md', // default is md
          variant: 'solid', // default is solid
          colorScheme: 'blackAlpha', // default is gray
        },
      },
      Table: {
        variants: {
            simple: {
              caption : {
                display: 'none',
              },
              th: {
                fontFamily:'NanumSquare',
                textTransform: "none",
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.3',
                color: '#000',
                textAlign: 'center',
                p: '7px 5px',
                bg: '#ccc',
                letterSpacing: '-1px',
              },
              td: {
                fontFamily:'NanumSquare',
                fontSize: '16px',
                lineHeight: '1.3',
                color: '#888',
                textAlign: 'center',
                borderColor: '#ccc',
                p: '15px 5px',
                wordBreak: 'break-all',
                whiteSpace: 'normal',
                letterSpacing: '0',
                _last: {
                  bgImage: "url('/assets/images/icons/ico-arrow-01.svg')",
                  bgPosition: 'calc(100% - 5px) center',
                  bgRepeat: 'no-repeat',
                }
              }
            }
        }
      },
      Badge: {
        variants: {
          state: {
            w: '90px',
            fontSize: '16px',
            lineHeight: '1.3',
            color: '#888',
            fontWeight: 'normal',
            textAlign: 'center',
            p: '2px 0',
            bg: '#e5e5e5',
          }
        }
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
      Popover: {
        baseStyle: {
          content: {
            maxWidth: '400px',
            width: 'auto',
            lineHeight: '1.3',
            p: '20px 20px 15px',
            letterSpacing: '0',
          },
          body: {
            p: '0',
          }
        },
      },
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
      Input: {
        variants: {
          outline: {
            field: {
              height: '39px',
              borderRadius: '3px',
            },
            icon: {
              // pr: '0',
            }
          }
        }
      },
      Menu: {
        variants: {
          typeSelect: {
            button: {
            },
            list: {
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
            //   textTransform: 'uppercase',
            //   color: 'white',
            //   textAlign: 'center',
            //   letterSpacing: 'wider',
            //   opacity: '0.7',
            // },
            // command: {
            //   opacity: '0.8',
            //   fontFamily: 'mono',
            //   fontSize: 'sm',
            //   letterSpacing: 'tighter',
            //   pl: '4',
            // },
            // divider: {
            //   my: '4',
            //   borderColor: 'white',
            //   borderBottom: '2px dotted',
            // },
          },
        }
      },
      // FormControl: {
      //   variants: {
      //     typeLogin: {
      //       display: 'flex',
      //       Label: {
      //         fontSize: '30px',
      //       }
      //     }
      //   }
      // },
    }
  }
)

export default theme


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