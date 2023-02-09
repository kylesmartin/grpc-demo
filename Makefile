################
# Run commands #
################

run_server:
	yarn serve

run_client:
	go run ./client/main.go --name=$(NAME)

############
# Protobuf #
############

generate:
	cd proto && buf generate
