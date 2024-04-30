#!/bin/bash
# Set the version number
version=$(grep "^Version:" final-countdown-block/final-countdown-block.php | awk '{print $2}')
# Create the plugin package
zip -r final-countdown-block-$version.zip final-countdown-block -x "*.git*" -x "*.DS_Store"
# Move the plugin package to the dist directory
mv final-countdown-block-$version.zip dist/