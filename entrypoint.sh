#!/bin/bash

cp -r /usr/src/cache/node_modules/. /usr/app/node_modules/
exec npm run nodemon
