# nextjs-navigation-lcok

## Installtion

```sh
npm install @xuhaojun/nextjs-navigation-lock
```

## Quickstart

```jsx
import { useNavigationLock } from "@xuhaojun/nextjs-navigation-lock";
import Link from "@xuhaojun/nextjs-navigation-lock/link";
import { useRouter } from "@xuhaojun/nextjs-navigation-lock/navigation";

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

## Credit

code ship from [proxyProvider](https://github.com/cgfeel/next.v2/tree/master/routing-file/src/components/proxyProvider) to a module.

## Reference

1. [Conditionally Block Navigation - nextjs - appDir](https://github.com/vercel/next.js/discussions/47020)
