# This is a quick bash script to ensure all the
# lessons work as expected. Run this (./test.sh)
# and make sure there are no errors in the output.

yarn add webpack
yarn
cd lessons
cd 01-basic_io
webpack; rm -rf dist
cd ../02-starting_point
webpack; rm -rf dist
cd ../03-multiple_files
webpack; rm -rf dist
cd ../04-multiple_in_one
webpack; rm -rf dist
cd ../05-npm_modules
webpack; rm -rf dist
cd ../06-loaders
webpack; rm -rf dist
cd ../07-loaders__inlining_all_the_things
webpack; rm -rf dist
cd ../08-consolidation
webpack; rm -rf dist
cd ../09-code_splitting
webpack; rm -rf dist
../10-tree_shaking
webpack; rm -rf dist
../10-tree_shaking_lodash
webpack; rm -rf dist
cd ../11-plugins_fun
webpack; rm -rf dist
cd ../12-web_dev_server
node_modules/.bin/webpack-dev-server

