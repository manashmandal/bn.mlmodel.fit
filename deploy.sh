npm run build

cd .vuepress/dist

# Add google meta tag for site verification
sed '/<meta charset="utf-8">/a <meta name="google-site-verification" content="oLrxhu74Ds11_yBIVFSOlhA30PhqQEeCgNZkfqNqDMg" />' index.html

echo "bn.mlmodel.fit" > CNAME


git config --global user.email "manashmndl@gmail.com"
git config --global user.name "manashmandal"

git init
git add -A

git commit -m "deploy"

git push -f https://manashmandal:$1@github.com/manashmandal/bn.mlmodel.fit.git master:gh-pages

# git push -f git@github.com:manashmandal/bn.mlmodel.fit.git master:gh-pages

