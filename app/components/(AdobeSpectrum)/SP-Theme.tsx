import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

import React from 'react';
import {createComponent} from '@lit-labs/react';

import { Theme } from '@spectrum-web-components/theme';

export const SpTheme = createComponent({
  tagName: 'sp-theme',
  elementClass: Theme,
  react: React
});

