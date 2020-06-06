npm run build

cd .vuepress/dist

echo "bn.mlmodel.fit" > CNAME

git init
git add -A

git commit -m "deploy"


git config --global user.email "manashmndl@gmail.com"
git config --global user.name "manashmandal"

git push -f https://manashmandal:${{ secrets.GITHUB_TOKEN }}@github.com/manashmandal/bn.mlmodel.fit.git master:gh-pages

# git push -f git@github.com:manashmandal/bn.mlmodel.fit.git master:gh-pages

