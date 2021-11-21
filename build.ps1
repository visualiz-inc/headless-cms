git clone https://github.com/rempei-okada/maccha.git
cd ./maccha/maccha.client
yarn install
yarn run build
cp -r -fo ./public ../../
cd ../maccha.server
yarn install
yarn run build
rm -r -fo ./node_modules
cd ../../
yarn install
rm -r -fo ./maccha