#!/bin/bash
#
# Asks the user for their non-base64 encoded PAT and outputs the base64 encoded string

node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
