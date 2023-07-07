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
          // transition: all 0.5s ease,
          'h2': {
            m : '0',
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
              }
            }
        }
      },
      Badge: {
        variants: {
          simple: {
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
        w: '90px',
        variants: {
          simple: {
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