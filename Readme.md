# nextjs-navigation-lcok

code ship from [proxyProvider](https://github.com/cgfeel/next.v2/tree/master/routing-file/src/components/proxyProvider) to a module.

## Installtion

```sh
npm install @xuhaojun/nextjs-navigation-lock
```

## Quickstart

```jsx
import { RouteChangeProvider } from "@xuhaojun/nextjs-navigation-lock";

function Page({ children }) {
  return <RouteChangeProvider>{children}</RouteChangeProvider>;
}
```

```jsx
import {
  useNavigationLock,
  Link,
  useRouter,
} from "@xuhaojun/nextjs-navigation-lock";

function Component() {
  const [isDirty, setIsDirty] = useState(false);
  useNavigationLock(isDirty);

  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <>
      <Link href="/users">Users</Link>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
```

## Reference

1. [Conditionally Block Navigation - nextjs - appDir](https://github.com/vercel/next.js/discussions/47020)
