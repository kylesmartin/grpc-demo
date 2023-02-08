################
# Run commands #
################

run_server: # TODO: replace with 'yarn serve'
	yarn serve
	go run ./greeter_server/main.go

run_client:
	go run ./greeter_client/main.go --name=$(NAME)

############
# Protobuf #
############

generate_go:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative greeter/greeter.proto

generate_ts: 
	yarn
	protoc --plugin=./greeter_server/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./greeter_server/src greeter/greeter.proto
