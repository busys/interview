#!/bin/bash
yarn build

mkdir docs

cp ./dist/* docs/

git branch -D gh-pages

git checkout -b gh-pages

git add .

git commit -m "chore"

git push origin :gh-pages

git push origin gh-pages

git checkout master