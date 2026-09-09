# Wink GitHub Pages 部署说明

## 方式一：直接上传到 GitHub

1. 在 GitHub 新建仓库，例如 `wink-official`。
2. 上传本项目压缩包解压后的所有文件到仓库根目录。
3. 打开仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 里选择 `GitHub Actions`。
5. 回到 `Actions` 页面，等待 `Deploy to GitHub Pages` 工作流完成。
6. 部署完成后，GitHub 会给出 Pages 访问地址。

## 方式二：命令行推送

```bash
npm ci
npm run build
git init -b main
git add .
git commit -m "Deploy Wink site"
git remote add origin https://github.com/<你的用户名>/<你的仓库名>.git
git push -u origin main
```

然后在 GitHub 仓库 `Settings` -> `Pages` 中选择 `GitHub Actions`。

## 已包含

- React + Vite 前端源码
- Wink / BLINK 品牌素材
- 页面视觉资源
- GitHub Pages 自动部署 workflow
- 3D Letter Swap 标题动画

## 不包含

- `node_modules`
- `dist`
- 本地临时截图
- 本地备份包
