#!/bin/bash
npm run build
rm -rf public/*
cp -r build/* public
git add public
git commit -a -m 'update'
git push -u origin main