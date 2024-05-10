#!/bin/bash
#
# Replaces the password values with the specified base64 PAT in the specified .npmrc file for the specified NPM feed
# Parameters:
#   $1: .npmrc file path
#   $2: NPM feed url
#   $3: base64 encoded PAT

# Note: this sed call uses the alternate regex delimiter "~" to avoid path character issues from the $2 variable
