#!/bin/bash
#
# Sets up the user's .npmrc file to include the auth token section for connecting to the private vienna NPM feed (needed to npm install)
file=~/.npmrc
npmurl=//msdata.pkgs.visualstudio.com/_packaging/vienna-shared-ux/npm/

# Start in this folder
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Instructions
echo This script will append the auth info for accessing the private NPM feeds to $file
echo "1. Create a New Token at this address: https://msdata.visualstudio.com/_usersSettings/tokens"
echo "   (Make sure it has Packaging -> Read scope checked. Also make sure to extend the expiration date)"
echo "2. Enter PAT (do not base64 encode it): "

# Check if the file has auth info and add the section (with placeholder password) if it doesn't
./npmrc/ensure_npmrc_auth_section.sh $file $npmurl

# Ask for the user's new PAT (non base64 encoded)
base64pat=$(./npmrc/get_base64_pat.sh)

# Update the passwords in the file
./npmrc/replace_npmrc_auth_password.sh $file $npmurl $base64pat

# Exit
echo $file has been updated with the new PAT token for the $npmurl feed
exit 1
