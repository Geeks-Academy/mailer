# npm run build
# npx serve build
# node --print 'process.env'

rm src/.env
touch src/.env
printenv >> src/.env

# rm -rf ./src/shared
# cp -r ./shared ./src/shared
# node sync
npm run start