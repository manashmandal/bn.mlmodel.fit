npm run build

cd .vuepress/dist

git init
git add -A

git commit -m "deploy"


git push -f git@github.com:manashmandal/bn.mlmodel.fit.git master:gh-pages