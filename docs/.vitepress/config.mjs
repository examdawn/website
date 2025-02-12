import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { defineConfig } from "vite";

const vitePressSidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true,
  excludePattern: ['README.md'],
  useFolderTitleFromIndexFile: true
};

const mermaidConfig = withSidebar({
  title: "Exam Dawn",
  description: "An All-in-One Resource Site for BNU UG Students",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('contents/')) {
          return `https://github.com/examdawn/content/edit/${filePath}`
        } else if (filePath.startsWith('NEP2020/')) {
          const parts = filePath.split('/');
          const year = parts[1];
          const courseName = parts[2].replace(/\s+/g, '_');
          return `https://github.com/examdawn/NEP2020_${year}_${courseName}/edit/contents/${filePath}`
        } else {
          return `https://github.com/examdawn/examdawn.github.io/edit/vitepress/docs/${filePath}`
        }
      }
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: "./contribute" },
      { text: 'Request Takedown', link: "./takedown" },
      { text: 'Typography', link: "./typography" },
      { text: 'Queries and Suggestions', link: "https://github.com/examdawn/website/issues" },
    ]
  },
  markdown: {
    math: true
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class"
  }
})

const mermaidWithSidebar = withMermaid(mermaidConfig);

export default defineConfig(withSidebar(mermaidWithSidebar, vitePressSidebarOptions));  