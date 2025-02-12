import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { defineConfig } from "vite";

function genSidebarConfig(doc) { // referenced from FOSSonTOP(credit to @PugzAreCute) https://github.com/FOSSonTop/website/blob/main/docs/.vitepress/config.mts
  return {
    documentRootPath: 'docs',
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
    collapsed: true,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    sortMenusByName: false,
    excludePattern: ['README**'],
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  };
}
const basePaths = ["NEP2020/2023/BCA/3rdsem", "NEP2020/2023/BCA/4thsem"]; // Relative to docs folder

const vitePressSidebarOptions = basePaths.map(path => genSidebarConfig(path));


const mermaidConfig = withSidebar({
  title: "Exam Dawn",
  description: "An All-in-One Resource Site for BNU UG Students",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('NEP2020/') && !/(assignment|lab|notes|solved)/.test(filePath)) {
          const parts = filePath.split('/');
          const year = parts[1];
          const courseName = parts[2].replace(/\s+/g, '_');
          return `https://github.com/examdawn/NEP2020_${year}_${courseName}/edit/${filePath}`
        }
      }
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: "/contribute" },
      { text: 'Request Takedown', link: "/takedown" },
      { text: 'Typography', link: "/typography" },
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