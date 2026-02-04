
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：设置基础路径为仓库名
  // 这样打包后的资源链接会是 /Dabuxunyou/assets/xxx.js
  base: '/Dabuxunyou/',
  build: {
    outDir: 'dist',
  }
});
