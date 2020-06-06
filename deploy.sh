npm run build

cd .vuepress/dist

echo "bn.mlmodel.fit" > CNAME


git config --global user.email "manashmndl@gmail.com"
git config --global user.name "manashmandal"

git init
git add -A

git commit -m "deploy"

git push -f https://manashmandal:$1@github.com/manashmandal/bn.mlmodel.fit.git master:gh-pages

# git push -f git@github.com:manashmandal/bn.mlmodel.fit.git master:gh-pages

