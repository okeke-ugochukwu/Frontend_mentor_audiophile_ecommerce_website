npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/okeke-ugochukwu/Frontend_mentor_audiophile_ecommerce_website main:live
cd ..