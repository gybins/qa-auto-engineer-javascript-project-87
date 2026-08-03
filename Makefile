install: 
	npm ci
lint: 
	npm run lint
test:
	npm test 
ci: install lint test