"use client";

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from 'react';

import "@cloudscape-design/global-styles/index.css"
import variables from '../variables.module.scss';


import AppLayout from '@cloudscape-design/components/app-layout';
import Button from '@cloudscape-design/components/button';
import Box from '@cloudscape-design/components/box';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TopNavigation from '@cloudscape-design/components/top-navigation';

import { Notifications } from './notifications';
import {navItems} from '../menu_items';

const breadcrumbs = [
  {
    text: 'Service name',
    href: '#',
  },
  {
    text: 'Pages',
    href: '#',
  },
];

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

const profileActions = [
  { type: 'button', id: 'profile', text: 'Profile' },
  { type: 'button', id: 'preferences', text: 'Preferences' },
  { type: 'button', id: 'security', text: 'Security' },
  {
    type: 'menu-dropdown',
    id: 'support-group',
    text: 'Support',
    items: [
      {
        id: 'documentation',
        text: 'Documentation',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
      { id: 'feedback', text: 'Feedback', href: '#', external: true, externalIconAriaLabel: ' (opens in new tab)' },
      { id: 'support', text: 'Customer support' },
    ],
  },
  { type: 'button', id: 'signout', text: 'Sign out' },
];


export default function CloudScape({children}: {children: React.ReactNode;}) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <AppLayout
        stickyNotifications
        toolsHide
        ariaLabels={{ navigationClose: 'close' }}
        navigation={<SideNavigation activeHref="#/pages" items={navItems} />}
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
        contentType={'default'}
        content={<div>{children}</div>}
        notifications={<Notifications />}
      />
    </>
  );
}
