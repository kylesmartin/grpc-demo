// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// /proto/services/greeter/v1/greeter.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var services_greeter_v1_greeter_pb = require('../../../services/greeter/v1/greeter_pb.js');

function serialize_services_greeter_v1_SayHelloRequest(arg) {
  if (!(arg instanceof services_greeter_v1_greeter_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type services.greeter.v1.SayHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_greeter_v1_SayHelloRequest(buffer_arg) {
  return services_greeter_v1_greeter_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_greeter_v1_SayHelloResponse(arg) {
  if (!(arg instanceof services_greeter_v1_greeter_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type services.greeter.v1.SayHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_greeter_v1_SayHelloResponse(buffer_arg) {
  return services_greeter_v1_greeter_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterServiceService = exports.GreeterServiceService = {
  // Sends a greeting
sayHello: {
    path: '/services.greeter.v1.GreeterService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: services_greeter_v1_greeter_pb.SayHelloRequest,
    responseType: services_greeter_v1_greeter_pb.SayHelloResponse,
    requestSerialize: serialize_services_greeter_v1_SayHelloRequest,
    requestDeserialize: deserialize_services_greeter_v1_SayHelloRequest,
    responseSerialize: serialize_services_greeter_v1_SayHelloResponse,
    responseDeserialize: deserialize_services_greeter_v1_SayHelloResponse,
  },
};

exports.GreeterServiceClient = grpc.makeGenericClientConstructor(GreeterServiceService);
