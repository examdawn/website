<template>
  <div class="jupyter-wrapper">
    <div ref="codeContainer">
      <slot></slot>
    </div>
    <button 
      class="jupyter-btn" 
      @click="openJupyter"
      :aria-label="`Try ${kernelName} in Jupyter`"
    >
      Try in Jupyter
      <svg 
        class="external-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      ({{ kernelName }})
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  kernel: {
    type: String,
    default: 'python'
  }
})

const codeContainer = ref(null)
const kernelName = ref(props.kernel.toUpperCase())

function getCode() {
  if (!codeContainer.value) {
    return ''
  }
  
  // Get code from the slot content
  const codeElement = codeContainer.value.querySelector('pre code') ||
                     codeContainer.value.querySelector('code')
  
  if (codeElement) {
    return codeElement.textContent || codeElement.innerText || ''
  }
  
  return codeContainer.value.textContent || codeContainer.value.innerText || ''
}

function openJupyter() {
  const code = getCode().trim()
  
  if (!code) {
    console.warn('No code block found in JupyterLite component')
    return
  }

  // Encode the code for URL
  const encodedCode = encodeURIComponent(code)
  
  // Open Jupyter in new tab
  const url = `https://jupyter.org/try-jupyter/repl/?kernel=${props.kernel}&code=${encodedCode}`
  
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.jupyter-wrapper {
  margin: 1rem 0;
}

.jupyter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: transparent;
  color: #f76707;
  border: 1.5px solid #ffa94d;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.jupyter-btn:hover {
  background: #fff4e6;
  color: #f76707;
  border-color: #f76707;
  box-shadow: 0 4px 12px rgba(247, 103, 7, 0.15);
}

.jupyter-btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(247, 103, 7, 0.1);
}

.jupyter-btn:focus-visible {
  outline: 2px solid #f76707;
  outline-offset: 2px;
}

.jupyter-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}

.external-icon {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  margin-left: -0.25rem;
}

.dark .jupyter-btn {
  color: #ffa94d;
  border-color: #ffa94d;
  background: transparent;
}

.dark .jupyter-btn:hover {
  background: rgba(255, 169, 77, 0.1);
  box-shadow: 0 4px 12px rgba(255, 169, 77, 0.2);
}
</style>