mongo &
cd api
./node_modules/.bin/webpack --entry ./src/main.js --output ./dist/bundle.js &
npm run watch &
cd dist
nodemon operation/api/dist/bundle.js &
cd ../../frontend
npm run dev