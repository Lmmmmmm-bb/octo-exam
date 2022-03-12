![Vite-Starter](https://socialify.git.ci/Lmmmmmm-bb/Vite-Starter/image?description=1&font=Inter&language=1&theme=Light)

<p align="center">
<a href="https://github.com/Lmmmmmm-bb/Vite-Starter"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/Vite-Starter"></a>
<a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
<a href="https://github.com/Lmmmmmm-bb/Vite-Starter/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Lmmmmmm-bb/Vite-Starter"></a>
<a href="https://github.com/Lmmmmmm-bb/Vite-Starter/pulls"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF"></a>
</p>

## 主要模块

- Vite
- Vue + Pinia
- Axios + Vue-Router
- ESLint + Prettier
- Commit Lint + Husky
- Element Plus + Tailwind CSS
- SCSS + SCSS-Typed-Modules

_由于 Taillwind CSS 和 Element Plus 有样式冲突，所以暂时没有启用 Tailwind CSS。[点击查看相应 issue](https://github.com/element-plus/element-plus/issues/5693)_

## 如何使用

```shell
> pnpm install # 安装依赖
> pnpm run dev # 启动开发服务器
> pnpm run build # 构建生产环境
```

## `pnpm` or `npm` or `yarn`

三者都是包管理工具，`yarn` 相比 `npm` 有着更快的安装速度，作为后来者 `pnpm` 比 `yarn` 的安装速度更快，并且能更高效的利用磁盘空间，既然使用了 `Vite` 作为构建工具，我更倾向于使用更新的包管理工具 `pnpm`，当然，你也可以使用 `npm` 或 `yarn` 作为包管理工具，使用 `pnpm` 并不是强制要求的！
![pnpm benchmark](https://cdn.jsdelivr.net/gh/Lmmmmmm-bb/Image-Hosting@master/pnpm.6saq0gxynks0.svg)

## Pinia or Vuex

由于 Vuex4 对 TS 的支持不太友好，Pinia 有良好的 TS 支持和函数式思想，提供的 API 简单，上手也更快，所以最终选择了 Pinia。[对比 Pinia 和 Vuex](https://pinia.vuejs.org/introduction.html#comparison-with-vuex)

## Vue-Query

我们有非常强大的 HTTP 网络请求库 Axios，能很轻松的帮助我们发送网络请求，但是管理请求缓存是十分复杂且麻烦的事情，所以此模版集成了 Vue-Query，它能帮你管理请求缓存，提供 Axios 的上层封装，并且 Vue-Query 基于 React-Query，如果你使用过 React-Query 那么 Vue-Query 你将很快就能上手。[学习 Vue-Query](https://vue-query.vercel.app)

## SCSS-Typed-Modules

Vue 自身提供了很好的样式隔离方法 `scope`，但是它仍然有弊端，比如在 JS 中访问样式，所以模版集成了 SCSS-Typed-Modules，它提供了 SCSS 文件的类型定义，并且在你修改样式文件后自动生成类型定义文件，让你在代码中有良好的类型提示，提高你的开发效率。

## Commit Lint

模版集成了 `commit-lint` 和 `cz-customizable`，请使用 `pnpm run commit` 代替 `git commit`，它能让你的 commit 信息更清晰统一。
