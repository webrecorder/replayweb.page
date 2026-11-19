#!/bin/bash
# Fetch latest rules from easylist, filter out only css selector hiding rules (rules containing '##')
curr=$(dirname "${BASH_SOURCE[0]}")
curl "https://easylist.to/easylist/easylist.txt" | grep '##' | gzip -9 > $curr/adblock.gz
