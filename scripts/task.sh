#!/bin/bash

CMD=$1
shift

exe() { echo "$@" ; $@ ; }

case $CMD in
  clean)
    exe "rm -fr ./dist"
    ;;

  test)
    if [ -d "./test" ]; then
      exe "../../node_modules/.bin/jest -c $(pwd)/jest.config.js --rootDir ."
    else
      echo "No tests to run"
    fi
    ;;
    
  lint)
    exe "../../node_modules/.bin/eslint ./src ./test -c $(pwd)/eslint.config.js --report-unused-disable-directives"
    ;;
    
  *)
    if [[ -z "$CMD" ]]; then
      echo "USAGE: ./task (clean|test|lint|<node_modules_bin_command>) command_args"
      exit 0
    fi
    exe "../../node_modules/.bin/$CMD $@"
    ;;
esac