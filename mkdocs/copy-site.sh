#!/usr/bin/env bash
curr=$(dirname "${BASH_SOURCE[0]}")
src=${curr}/..
dest=${curr}/site/
for file in $(cat $curr/sitefiles.txt); do cp -r "$src/$file" $dest; done
