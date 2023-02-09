install:
	yarn

################
# Run commands #
################

run_server: # TODO: get tsc working
	nodemon server/src/index.ts --watch server/src

run_client:
	go run ./client/main.go --name=$(NAME)

############
# Protobuf #
############

generate:
	cd proto && buf generate
