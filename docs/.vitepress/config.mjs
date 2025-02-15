import { withMermaid } from "vitepress-plugin-mermaid"
import { withSidebar } from "vitepress-sidebar"
import { vitepressPythonEditor } from 'vitepress-python-editor/vite-plugin'
import { defineConfig } from "vite";

const basePaths = ["NEP2020/2023/BCA"]; // Put paths here, seperated by commas 

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
    excludePattern: ['README**', 'solved.md', 'lab.md', 'assignment.md'],
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  };
}

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
        if (filePath.startsWith('NEP2020/') && !filePath.match(/(assignment|lab|notes|solved)$/)) {
          const parts = filePath.split('/');
          const year = parts[1];
          const courseName = parts[2].replace(/\s+/g, '_');
          const remainingPath = parts.slice(3).join('/');
          return `https://github.com/examdawn/NEP2020_${year}_${courseName}/edit/contents/${remainingPath}`
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
    ],
    socialLinks: [
      { 
        icon: 'github',
        link: 'https://github.com/examdawn/',
        ariaLabel: 'Our Git Profile'
      }
    ]
  },
  vite: {
    plugins: [
      vitepressPythonEditor({ assetsDir: 'docs/.vitepress/dist/assets' }),
    ],
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
