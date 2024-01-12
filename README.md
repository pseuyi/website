# deployment process to subtree

```javascript
npm run build

git push -f build build:master

git subtree push --prefix=build --squash build master
```
