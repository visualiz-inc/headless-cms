git clone https://github.com/rempei-okada/maccha.git
cd ./maccha/maccha.client
yarn install
yarn run build
cp -rf ./public ../../
cd ../maccha.server
yarn install
yarn run build
rm -rf ./node_modules
cd ../../
yarn install
rm -rf ./maccha