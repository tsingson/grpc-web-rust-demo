"use client";
import { useEffect, useState } from "react";

import { isAbortError } from "abort-controller-x";
import { UserDto } from "../../pb/getting/v1/user";
import { userClient } from "../../lib/grpc-web";

export default function Profile() {
	const [user, setUser] = useState<UserDto>();

	useEffect(() => {
		const abortController = new AbortController();
		userClient
			.get({ id: 1 }, { signal: abortController.signal })
			.then((res) => {
				console.log(res);
				setUser(res);
			})
			.catch((error) => {
				if (isAbortError(error)) {
					return; // 忽略 aboted 错误
				}
				throw error;
			});

		// 当 effect 退出时 自动取消请求异步请求
		return () => abortController.abort("manual aborted");
	}, []);

	useEffect(() => {
		const abortController = new AbortController();
		async function streams() {
			for await (const res of userClient.streamList(
				{},
				{ signal: abortController.signal },
			)) {
				console.log("streamList response:", res);
			}
		}

		streams().catch((error) => {
			if (isAbortError(error)) {
				return;
			}
			throw error;
		});

		return () => abortController.abort("manual aborted");
	}, []);

	return (
		<div className="w-full h-full">
			<form className="w-80 mx-auto mt-20 block justify-center items-center space-y-4">
				<div>
					<p>{user?.name}</p>
				</div>
				<div>
					<p>{user?.email}</p>
				</div>
				<div>
					<p>{user?.status}</p>
				</div>
			</form>
		</div>
	);
}
