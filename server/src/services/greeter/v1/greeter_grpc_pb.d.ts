// package: services.greeter.v1
// file: services/greeter/v1/greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as services_greeter_v1_greeter_pb from "../../../services/greeter/v1/greeter_pb";

interface IGreeterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterServiceService_ISayHello;
}

interface IGreeterServiceService_ISayHello extends grpc.MethodDefinition<services_greeter_v1_greeter_pb.SayHelloRequest, services_greeter_v1_greeter_pb.SayHelloResponse> {
    path: "/services.greeter.v1.GreeterService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_greeter_v1_greeter_pb.SayHelloRequest>;
    requestDeserialize: grpc.deserialize<services_greeter_v1_greeter_pb.SayHelloRequest>;
    responseSerialize: grpc.serialize<services_greeter_v1_greeter_pb.SayHelloResponse>;
    responseDeserialize: grpc.deserialize<services_greeter_v1_greeter_pb.SayHelloResponse>;
}

export const GreeterServiceService: IGreeterServiceService;

export interface IGreeterServiceServer {
    sayHello: grpc.handleUnaryCall<services_greeter_v1_greeter_pb.SayHelloRequest, services_greeter_v1_greeter_pb.SayHelloResponse>;
}

export interface IGreeterServiceClient {
    sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterServiceClient extends grpc.Client implements IGreeterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_greeter_v1_greeter_pb.SayHelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_greeter_v1_greeter_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
}
