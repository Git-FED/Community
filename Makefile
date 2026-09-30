.PHONY: check site test
check:
	node scripts/check-repo.mjs
site:
	python3 -m http.server 4173 --directory site
test:
	node scripts/check-repo.mjs
