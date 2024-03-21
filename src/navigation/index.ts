import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext } from "react";
import { useRouter as useRouterRaw } from "next/navigation";
import { RouteChangeContext } from "..";

export function useRouter(): AppRouterInstance {
  const [tips] = useContext(RouteChangeContext);
  const router = useRouterRaw();

  return new Proxy(router, {
    get: function (target, propKey) {
      const confirm = tips === undefined ? true : window.confirm(tips);
      return confirm ? target[propKey as RouterKey] : () => {};
    },
  });
}

type RouterKey = keyof ReturnType<typeof useRouterRaw>;
