'use client';

import React from 'react';
import { defaultTheme, SSRProvider, Provider, View, Grid, Flex, Header, Footer } from '@adobe/react-spectrum';
import '@spectrum-css/vars/dist/spectrum-global.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';
import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/sidenav';
import '@spectrum-css/typography/dist/index-vars.css';

export default function AdobeSpectrum({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <SSRProvider >
        <Provider
          theme={defaultTheme}
          colorScheme="light"
        >
          <div className="spectrum spectrum--medium spectrum--light">
            <View
              colorVersion={6}
            >
              <Grid
                areas={{
                  base: [
                    'header',
                    'nav',
                    'content',
                    'footer'
                  ],
                  M: [
                    'header header',
                    'nav content',
                    'nav content',
                    'footer footer'
                  ],
                  L: [
                    'header header  header',
                    'nav    content toc',
                    'nav    content toc',
                    'footer footer  footer'
                  ],
                  XL: [
                    'header header  header gutter',
                    'nav    content toc gutter',
                    'nav    content toc gutter',
                    'footer footer  footer gutter'
                  ],
                  XXL: [
                    'header header  header gutter',
                    'nav    content toc gutter',
                    'nav    content toc gutter',
                    'footer footer  footer gutter'
                  ]
                }}
                columns={{
                  M: ['size-1700', '1fr', 'size-1700'],
                  L: ['size-2000', '1fr', 'size-2000'],
                  XL: ['size-2000', '2fr', 'size-2000','.5fr'],
                  XXL: ['size-3000', '2fr', 'size-3000','1fr']
                }}
                gap='size-100'
              >
                <View
                  colorVersion={6}
                  backgroundColor="cyan-800"
                  gridArea="header"
                  height="size-1000"
                >
                  <Flex
                    direction={{ base: 'row', S: 'column', M: 'row', L: 'row'}}
                    gap='size-50'
                    margin='size-50'
                    flex="none"
                    width="100%"
                    height="calc(100% - size-100)"
                  >
                    <View
                      colorVersion={6}
                      backgroundColor="green-400"
                      width="1"
                      minWidth="size-100"
                      maxWidth="calc(25% - size-100)"
                      flex='1 1 auto'
                    />
                    <View
                      colorVersion={6}
                      backgroundColor="purple-400"
                      width="1"
                      minWidth="size-100"
                      flex={2}
                      alignSelf="center"
                    >
                      <Header >

                          <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL">
                            Evony TKR Tips
                          </h1>

                      </Header>
                    </View>
                    <View
                      colorVersion={6}
                      backgroundColor="green-400"
                      width="1"
                      minWidth="size-100"
                      maxWidth="calc(25% - size-100)"
                      flex='1 1 auto'
                    />
                  </Flex>
                </View>
                <View
                  colorVersion={6}
                  backgroundColor="blue-600"
                  gridArea="nav"
                >
                  <Flex
                    direction={{ base: 'row', M: 'column' }}
                    gap="size-100"
                    margin="size-100"
                  >
                    <View
                      colorVersion={6}
                      backgroundColor="gray-50"
                      height="size-250"
                      minWidth="size-900"
                    />
                    <View
                      colorVersion={6}
                      backgroundColor="gray-50"
                      height="size-250"
                      minWidth="size-900"
                    />
                    <View
                      colorVersion={6}
                      backgroundColor="gray-50"
                      height="size-250"
                      minWidth="size-900"
                    />
                  </Flex>
                </View>
                <View
                  colorVersion={6}
                  backgroundColor={"blue-100"}
                  height="size-4600"
                  gridArea="content"
                  flex={1}
                >
                  {children}
                </View>
                <View
                  colorVersion={6}
                  backgroundColor="magenta-600"
                  gridArea="toc"
                  minHeight="size-1000"
                  isHidden={{ base: true, M: false, L: false }}
                />
                <View
                  colorVersion={6}
                  backgroundColor="cyan-800"
                  gridArea="footer"
                  height="size-1000"
                  flex="none"
                >
                  <Footer
                    flex="auto"
                  >
                    Copyright © Luke Schierer<br/>
                    <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">
                      <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
                    </a><br/>
                    This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                  </Footer>
                </View>
              </Grid>
            </View>
          </div>
        </Provider>
      </SSRProvider>
    </>

  );
}
