mongo &
cd api
npm run watch &
cd dist
nodemon bundle.js &
cd ../../frontend
npm run dev