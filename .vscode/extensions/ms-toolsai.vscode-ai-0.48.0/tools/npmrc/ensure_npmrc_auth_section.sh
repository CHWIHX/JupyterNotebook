#!/bin/bash
#
# Ensures that the given .npmrc file includes the auth token section for connecting to the given private NPM feed
# The password value will be a placeholder that can be replaced with the correct base64 encoded PAT
# Parameters:
#   $1: .npmrc file path
#   $2: NPM feed url

# Check if the section already exists by searching for a password line for the NPM feed url. If so, exit
if grep -q -s "$2:_password=" $1; then
    exit 0
fi

# Otherwise add the auth token section with placeholder password
cat >> $1 << EOL
; begin auth token
${2}registry/:username=msdata
${2}registry/:_password=[BASE64_ENCODED_PAT]
${2}registry/:email=npm requires email to be set but doesn't use the value
${2}:username=msdata
${2}:_password=[BASE64_ENCODED_PAT]
${2}:email=npm requires email to be set but doesn't use the value
; end auth token
EOL
