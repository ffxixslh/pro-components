import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginApiDocgen } from '@rspress/plugin-api-docgen';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginWorkspaceDev } from 'rsbuild-plugin-workspace-dev';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'ProComponents',
  description: 'Enhanced Antd ProComponents.',
  lang: 'zh-CN',
  builderConfig: {
    plugins: [
      pluginWorkspaceDev({
        startCurrent: true,
      }),
    ],
  },
  plugins: [
    pluginApiDocgen({
      entries: {},
      apiParseTool: 'react-docgen-typescript',
    }),
    pluginPreview(),
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/ffxixslh/pro-components',
      },
    ],
  },
});
