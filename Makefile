PATH	:= $(PATH):node_modules/.bin
#----------------------------

.PHONY: install
install: node_modules

node_modules: package.json
	@npm install
	@touch $@

build: install
	@browserify index.js -o bundle.js -t [ babelify --presets [ es2015 react ] ]

serve: build
	@open index.html
