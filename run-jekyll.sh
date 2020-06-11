#!/bin/bash
export PATH=/usr/local/opt/ruby/bin:$PATH
bundle update
bundle exec jekyll serve --trace
