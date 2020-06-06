npm run build

cd .vuepress/dist

echo "bn.mlmodel.fit" > CNAME

git init
git add -A

git commit -m "deploy"

ls
# git push -f git@github.com:manashmandal/bn.mlmodel.fit.git master:gh-pages