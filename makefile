GENERATED_FILES = \
	st.js \
	st.min.js

PREFIX = /cygdrive/c/Users/Stephan
	
all: $(GENERATED_FILES)

.PHONY: clean all

js/st-start.js: package.json libs/start.js
	node libs/start.js > $@

st.js: $(/bin/bash $(PREFIX)/node_modules/.bin/smash --ignore-missing --list js/st.js) package.json
	@rm -f $@
	$(PREFIX)/node_modules/.bin/smash js/st.js > $@
	@chmod a-w $@

st.min.js: st.js libs/uglify.js
	@rm -f $@
	@node libs/uglify.js $< > $@

clean:
	rm -f -- $(GENERATED_FILES)
