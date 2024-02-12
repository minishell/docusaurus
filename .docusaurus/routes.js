import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '971'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'e38'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'cc5'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '4bf'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'df7'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', '37c'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', '532'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '175'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', 'dd8'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '505'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '3e9'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '1c6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '084'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'be0'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '431'),
            routes: [
              {
                path: '/en/docs/category/tutorial---basics',
                component: ComponentCreator('/en/docs/category/tutorial---basics', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---basics-1',
                component: ComponentCreator('/en/docs/category/tutorial---basics-1', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---extras',
                component: ComponentCreator('/en/docs/category/tutorial---extras', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/getting-started/test-congratulations',
                component: ComponentCreator('/en/docs/getting-started/test-congratulations', '0a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/getting-started/test-create-a-blog-post',
                component: ComponentCreator('/en/docs/getting-started/test-create-a-blog-post', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/getting-started/test-create-a-document',
                component: ComponentCreator('/en/docs/getting-started/test-create-a-document', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/getting-started/test-create-a-page',
                component: ComponentCreator('/en/docs/getting-started/test-create-a-page', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/getting-started/test-deploy-your-site',
                component: ComponentCreator('/en/docs/getting-started/test-deploy-your-site', '43a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', '7c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'b8a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
