// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.1
// source: getting/v1/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../basic";
import { Pagination } from "../common/page";

export const protobufPackage = "getting.v1";

export interface UserDto {
  id: number;
  email: string;
  name?: string | undefined;
  status: number;
  /** epoch time in milliseconds */
  ctime: number;
}

export interface GetUserRequest {
  id: number;
}

export interface PageUserRequest {
  pagination: Pagination | undefined;
  name?: string | undefined;
  status?: number | undefined;
}

export interface UpdateUserRequest {
  id: number;
  name?: string | undefined;
  status?: number | undefined;
}

export interface StreamListRequest {
  name?: string | undefined;
  status?: number | undefined;
}

function createBaseUserDto(): UserDto {
  return { id: 0, email: "", name: undefined, status: 0, ctime: 0 };
}

export const UserDto: MessageFns<UserDto> = {
  encode(message: UserDto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.ctime !== 0) {
      writer.uint32(40).int64(message.ctime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserDto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ctime = longToNumber(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserDto {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      ctime: isSet(object.ctime) ? globalThis.Number(object.ctime) : 0,
    };
  },

  toJSON(message: UserDto): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.ctime !== 0) {
      obj.ctime = Math.round(message.ctime);
    }
    return obj;
  },

  create(base?: DeepPartial<UserDto>): UserDto {
    return UserDto.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserDto>): UserDto {
    const message = createBaseUserDto();
    message.id = object.id ?? 0;
    message.email = object.email ?? "";
    message.name = object.name ?? undefined;
    message.status = object.status ?? 0;
    message.ctime = object.ctime ?? 0;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { id: 0 };
}

export const GetUserRequest: MessageFns<GetUserRequest> = {
  encode(message: GetUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserRequest>): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBasePageUserRequest(): PageUserRequest {
  return { pagination: undefined, name: undefined, status: undefined };
}

export const PageUserRequest: MessageFns<PageUserRequest> = {
  encode(message: PageUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PageUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageUserRequest {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? globalThis.Number(object.status) : undefined,
    };
  },

  toJSON(message: PageUserRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== undefined) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<PageUserRequest>): PageUserRequest {
    return PageUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PageUserRequest>): PageUserRequest {
    const message = createBasePageUserRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.name = object.name ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { id: 0, name: undefined, status: undefined };
}

export const UpdateUserRequest: MessageFns<UpdateUserRequest> = {
  encode(message: UpdateUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? globalThis.Number(object.status) : undefined,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== undefined) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseStreamListRequest(): StreamListRequest {
  return { name: undefined, status: undefined };
}

export const StreamListRequest: MessageFns<StreamListRequest> = {
  encode(message: StreamListRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamListRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? globalThis.Number(object.status) : undefined,
    };
  },

  toJSON(message: StreamListRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== undefined) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamListRequest>): StreamListRequest {
    return StreamListRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamListRequest>): StreamListRequest {
    const message = createBaseStreamListRequest();
    message.name = object.name ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

export type UserDefinition = typeof UserDefinition;
export const UserDefinition = {
  name: "User",
  fullName: "getting.v1.User",
  methods: {
    get: {
      name: "Get",
      requestType: GetUserRequest,
      requestStream: false,
      responseType: UserDto,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: UpdateUserRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    streamList: {
      name: "StreamList",
      requestType: StreamListRequest,
      requestStream: false,
      responseType: UserDto,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  get(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UserDto>>;
  update(request: UpdateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  streamList(
    request: StreamListRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<UserDto>>;
}

export interface UserClient<CallOptionsExt = {}> {
  get(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UserDto>;
  update(request: DeepPartial<UpdateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  streamList(request: DeepPartial<StreamListRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<UserDto>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
