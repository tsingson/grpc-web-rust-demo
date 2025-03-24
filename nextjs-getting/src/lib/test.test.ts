import { isAbortError } from "abort-controller-x";
import { test } from "vitest";
import { userClient } from "./grpc-web";
import { myLog } from "../log/logger";

test("get", async () => {
	const abortController = new AbortController();
	userClient
		.get({ id: 1 }, { signal: abortController.signal })
		.then((res) => {
			myLog.debug("----------- result ", res);
		})
		.catch((error) => {
			if (isAbortError(error)) {
				return; // 忽略 aboted 错误
			}
			throw error;
		});
});

test("stream", async () => {
	const abortController = new AbortController();
	async function streams() {
		for await (const res of userClient.streamList(
			{},
			{ signal: abortController.signal },
		)) {
			console.log("streamList response:", res);
			myLog.debug("----------- result ", res);
		}
	}

	streams().catch((error) => {
		if (isAbortError(error)) {
			return;
		}
		throw error;
	});

	return () => abortController.abort("manual aborted");
});
