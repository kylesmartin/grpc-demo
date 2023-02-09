import {
    Server,
    ServerCredentials,
    ServerUnaryCall,
    sendUnaryData,
} from '@grpc/grpc-js';

import {
    SayHelloRequest,
    SayHelloResponse,
} from './services/greeter/v1/greeter_pb';

import {GreeterServiceService} from './services/greeter/v1/greeter_grpc_pb'

const sayHello = (
    call: ServerUnaryCall<SayHelloRequest, SayHelloResponse>,
    callback: sendUnaryData<SayHelloResponse>
) => {
    const response = new SayHelloResponse();
    response.setMessage(`Hello, ${call.request.getName()}`)
    callback(null, response);
};

const server = new Server();

server.addService({...GreeterServiceService}, {sayHello});

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    server.start();

    console.log('server is running on 0.0.0.0:50051');
});
