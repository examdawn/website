// docs/.vitepress/config.mjs
import { withMermaid } from "file:///workspaces/website/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";
import { withSidebar } from "file:///workspaces/website/node_modules/vitepress-sidebar/dist/index.js";
import { defineConfig } from "file:///workspaces/website/node_modules/vite/dist/node/index.js";
function genSidebarConfig(doc) {
  return {
    documentRootPath: "docs",
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
    collapsed: true,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    sortMenusByName: false,
    excludePattern: ["README**"],
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  };
}
var basePaths = ["NEP2020/2023/BCA/3rdsem", "NEP2020/2023/BCA/4thsem"];
var vitePressSidebarOptions = basePaths.map((path) => genSidebarConfig(path));
var mermaidConfig = withSidebar({
  title: "Exam Dawn",
  description: "An All-in-One Resource Site for BNU UG Students",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith("NEP2020/") && !/(assignment|lab|notes|solved)/.test(filePath)) {
          const parts = filePath.split("/");
          const year = parts[1];
          const courseName = parts[2].replace(/\s+/g, "_");
          return `https://github.com/examdawn/NEP2020_${year}_${courseName}/edit/${filePath}`;
        }
      }
    },
    search: {
      provider: "local"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Contribute", link: "/contribute" },
      { text: "Request Takedown", link: "/takedown" },
      { text: "Typography", link: "/typography" },
      { text: "Queries and Suggestions", link: "https://github.com/examdawn/website/issues" }
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
});
var mermaidWithSidebar = withMermaid(mermaidConfig);
var config_default = defineConfig(withSidebar(mermaidWithSidebar, vitePressSidebarOptions));
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy93ZWJzaXRlL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvd2Vic2l0ZS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy93ZWJzaXRlL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubWpzXCI7aW1wb3J0IHsgd2l0aE1lcm1haWQgfSBmcm9tIFwidml0ZXByZXNzLXBsdWdpbi1tZXJtYWlkXCJcbmltcG9ydCB7IHdpdGhTaWRlYmFyIH0gZnJvbSBcInZpdGVwcmVzcy1zaWRlYmFyXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbmZ1bmN0aW9uIGdlblNpZGViYXJDb25maWcoZG9jKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRSb290UGF0aDogJ2RvY3MnLFxuICAgIHNjYW5TdGFydFBhdGg6IGRvYyxcbiAgICByZXNvbHZlUGF0aDogYC8ke2RvY30vYCxcbiAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgaHlwaGVuVG9TcGFjZTogdHJ1ZSxcbiAgICBjYXBpdGFsaXplRWFjaFdvcmRzOiB0cnVlLFxuICAgIHVuZGVyc2NvcmVUb1NwYWNlOiB0cnVlLFxuICAgIGluY2x1ZGVFbXB0eUZvbGRlcjogZmFsc2UsXG4gICAgc29ydE1lbnVzQnlOYW1lOiBmYWxzZSxcbiAgICBleGNsdWRlUGF0dGVybjogWydSRUFETUUqKiddLFxuICAgIHNvcnRNZW51c0J5RnJvbnRtYXR0ZXJPcmRlcjogdHJ1ZSxcbiAgICBpbmNsdWRlRm9sZGVySW5kZXhGaWxlOiB0cnVlLFxuICAgIHVzZVRpdGxlRnJvbUZyb250bWF0dGVyOiB0cnVlXG4gIH07XG59XG5jb25zdCBiYXNlUGF0aHMgPSBbXCJORVAyMDIwLzIwMjMvQkNBLzNyZHNlbVwiLCBcIk5FUDIwMjAvMjAyMy9CQ0EvNHRoc2VtXCJdOyAvLyBSZWxhdGl2ZSB0byBkb2NzIGZvbGRlclxuXG5jb25zdCB2aXRlUHJlc3NTaWRlYmFyT3B0aW9ucyA9IGJhc2VQYXRocy5tYXAocGF0aCA9PiBnZW5TaWRlYmFyQ29uZmlnKHBhdGgpKTtcblxuXG5jb25zdCBtZXJtYWlkQ29uZmlnID0gd2l0aFNpZGViYXIoe1xuICB0aXRsZTogXCJFeGFtIERhd25cIixcbiAgZGVzY3JpcHRpb246IFwiQW4gQWxsLWluLU9uZSBSZXNvdXJjZSBTaXRlIGZvciBCTlUgVUcgU3R1ZGVudHNcIixcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAoeyBmaWxlUGF0aCB9KSA9PiB7XG4gICAgICAgIGlmIChmaWxlUGF0aC5zdGFydHNXaXRoKCdORVAyMDIwLycpICYmICEvKGFzc2lnbm1lbnR8bGFifG5vdGVzfHNvbHZlZCkvLnRlc3QoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBmaWxlUGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJ0c1sxXTtcbiAgICAgICAgICBjb25zdCBjb3Vyc2VOYW1lID0gcGFydHNbMl0ucmVwbGFjZSgvXFxzKy9nLCAnXycpO1xuICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9naXRodWIuY29tL2V4YW1kYXduL05FUDIwMjBfJHt5ZWFyfV8ke2NvdXJzZU5hbWV9L2VkaXQvJHtmaWxlUGF0aH1gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udHJpYnV0ZScsIGxpbms6IFwiL2NvbnRyaWJ1dGVcIiB9LFxuICAgICAgeyB0ZXh0OiAnUmVxdWVzdCBUYWtlZG93bicsIGxpbms6IFwiL3Rha2Vkb3duXCIgfSxcbiAgICAgIHsgdGV4dDogJ1R5cG9ncmFwaHknLCBsaW5rOiBcIi90eXBvZ3JhcGh5XCIgfSxcbiAgICAgIHsgdGV4dDogJ1F1ZXJpZXMgYW5kIFN1Z2dlc3Rpb25zJywgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vZXhhbWRhd24vd2Vic2l0ZS9pc3N1ZXNcIiB9LFxuICAgIF1cbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICBtYXRoOiB0cnVlXG4gIH0sXG4gIG1lcm1haWQ6IHtcbiAgICAvLyByZWZlciBodHRwczovL21lcm1haWQuanMub3JnL2NvbmZpZy9zZXR1cC9tb2R1bGVzL21lcm1haWRBUEkuaHRtbCNtZXJtYWlkYXBpLWNvbmZpZ3VyYXRpb24tZGVmYXVsdHMgZm9yIG9wdGlvbnNcbiAgfSxcbiAgbWVybWFpZFBsdWdpbjoge1xuICAgIGNsYXNzOiBcIm1lcm1haWQgbXktY2xhc3NcIlxuICB9XG59KVxuXG5jb25zdCBtZXJtYWlkV2l0aFNpZGViYXIgPSB3aXRoTWVybWFpZChtZXJtYWlkQ29uZmlnKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHdpdGhTaWRlYmFyKG1lcm1haWRXaXRoU2lkZWJhciwgdml0ZVByZXNzU2lkZWJhck9wdGlvbnMpKTsgICJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVIsU0FBUyxtQkFBbUI7QUFDL1MsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxvQkFBb0I7QUFFN0IsU0FBUyxpQkFBaUIsS0FBSztBQUM3QixTQUFPO0FBQUEsSUFDTCxrQkFBa0I7QUFBQSxJQUNsQixlQUFlO0FBQUEsSUFDZixhQUFhLElBQUksR0FBRztBQUFBLElBQ3BCLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxJQUNmLHFCQUFxQjtBQUFBLElBQ3JCLG1CQUFtQjtBQUFBLElBQ25CLG9CQUFvQjtBQUFBLElBQ3BCLGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQixDQUFDLFVBQVU7QUFBQSxJQUMzQiw2QkFBNkI7QUFBQSxJQUM3Qix3QkFBd0I7QUFBQSxJQUN4Qix5QkFBeUI7QUFBQSxFQUMzQjtBQUNGO0FBQ0EsSUFBTSxZQUFZLENBQUMsMkJBQTJCLHlCQUF5QjtBQUV2RSxJQUFNLDBCQUEwQixVQUFVLElBQUksVUFBUSxpQkFBaUIsSUFBSSxDQUFDO0FBRzVFLElBQU0sZ0JBQWdCLFlBQVk7QUFBQSxFQUNoQyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxVQUFVO0FBQUEsTUFDUixTQUFTLENBQUMsRUFBRSxTQUFTLE1BQU07QUFDekIsWUFBSSxTQUFTLFdBQVcsVUFBVSxLQUFLLENBQUMsZ0NBQWdDLEtBQUssUUFBUSxHQUFHO0FBQ3RGLGdCQUFNLFFBQVEsU0FBUyxNQUFNLEdBQUc7QUFDaEMsZ0JBQU0sT0FBTyxNQUFNLENBQUM7QUFDcEIsZ0JBQU0sYUFBYSxNQUFNLENBQUMsRUFBRSxRQUFRLFFBQVEsR0FBRztBQUMvQyxpQkFBTyx1Q0FBdUMsSUFBSSxJQUFJLFVBQVUsU0FBUyxRQUFRO0FBQUEsUUFDbkY7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLE1BQzFCLEVBQUUsTUFBTSxjQUFjLE1BQU0sY0FBYztBQUFBLE1BQzFDLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxZQUFZO0FBQUEsTUFDOUMsRUFBRSxNQUFNLGNBQWMsTUFBTSxjQUFjO0FBQUEsTUFDMUMsRUFBRSxNQUFNLDJCQUEyQixNQUFNLDZDQUE2QztBQUFBLElBQ3hGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLEVBRVQ7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQSxFQUNUO0FBQ0YsQ0FBQztBQUVELElBQU0scUJBQXFCLFlBQVksYUFBYTtBQUVwRCxJQUFPLGlCQUFRLGFBQWEsWUFBWSxvQkFBb0IsdUJBQXVCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
