# 发生任何错误时终止
set -e

# 构建
pnpm run build

# 进入输出产物文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy: GitHub Page Deploy'

git push -f git@github.com:Lmmmmmm-bb/Octo-Exam.git master:gh-pages

cd -
