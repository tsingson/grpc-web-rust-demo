// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.28.3
// source: getting/v1/page.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "proto.getting.v1";

export enum SortDirection {
  SORT_DIRECTION_UNSPECIFIED = 0,
  SORT_DIRECTION_ASCE = 1,
  SORT_DIRECTION_DESC = 2,
  UNRECOGNIZED = -1,
}

export function sortDirectionFromJSON(object: any): SortDirection {
  switch (object) {
    case 0:
    case "SORT_DIRECTION_UNSPECIFIED":
      return SortDirection.SORT_DIRECTION_UNSPECIFIED;
    case 1:
    case "SORT_DIRECTION_ASCE":
      return SortDirection.SORT_DIRECTION_ASCE;
    case 2:
    case "SORT_DIRECTION_DESC":
      return SortDirection.SORT_DIRECTION_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortDirection.UNRECOGNIZED;
  }
}

export function sortDirectionToJSON(object: SortDirection): string {
  switch (object) {
    case SortDirection.SORT_DIRECTION_UNSPECIFIED:
      return "SORT_DIRECTION_UNSPECIFIED";
    case SortDirection.SORT_DIRECTION_ASCE:
      return "SORT_DIRECTION_ASCE";
    case SortDirection.SORT_DIRECTION_DESC:
      return "SORT_DIRECTION_DESC";
    case SortDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Pagination {
  page: number;
  pageSize: number;
  sortBys: SortBy[];
}

export interface SortBy {
  field: string;
  direction: SortDirection;
}

function createBasePagination(): Pagination {
  return { page: 0, pageSize: 0, sortBys: [] };
}

export const Pagination: MessageFns<Pagination> = {
  encode(message: Pagination, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.page !== 0) {
      writer.uint32(8).int64(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    for (const v of message.sortBys) {
      SortBy.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.page = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pageSize = longToNumber(reader.int64());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.sortBys.push(SortBy.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      sortBys: globalThis.Array.isArray(object?.sortBys) ? object.sortBys.map((e: any) => SortBy.fromJSON(e)) : [],
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.sortBys?.length) {
      obj.sortBys = message.sortBys.map((e) => SortBy.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Pagination>): Pagination {
    return Pagination.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Pagination>): Pagination {
    const message = createBasePagination();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.sortBys = object.sortBys?.map((e) => SortBy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSortBy(): SortBy {
  return { field: "", direction: 0 };
}

export const SortBy: MessageFns<SortBy> = {
  encode(message: SortBy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SortBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSortBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SortBy {
    return {
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      direction: isSet(object.direction) ? sortDirectionFromJSON(object.direction) : 0,
    };
  },

  toJSON(message: SortBy): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.direction !== 0) {
      obj.direction = sortDirectionToJSON(message.direction);
    }
    return obj;
  },

  create(base?: DeepPartial<SortBy>): SortBy {
    return SortBy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SortBy>): SortBy {
    const message = createBaseSortBy();
    message.field = object.field ?? "";
    message.direction = object.direction ?? 0;
    return message;
  },
};

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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
