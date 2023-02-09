// package: services.greeter.v1
// file: services/greeter/v1/greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SayHelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SayHelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SayHelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SayHelloRequest): SayHelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SayHelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SayHelloRequest;
    static deserializeBinaryFromReader(message: SayHelloRequest, reader: jspb.BinaryReader): SayHelloRequest;
}

export namespace SayHelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class SayHelloResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SayHelloResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SayHelloResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SayHelloResponse): SayHelloResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SayHelloResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SayHelloResponse;
    static deserializeBinaryFromReader(message: SayHelloResponse, reader: jspb.BinaryReader): SayHelloResponse;
}

export namespace SayHelloResponse {
    export type AsObject = {
        message: string,
    }
}
