const SVELTE_APP_PATH =
  process.env.NEXT_PUBLIC_SVELTE_APP_PATH ?? "/svelte-app/";

export default function Home() {
  const resolvedSvelteAppPath = SVELTE_APP_PATH.startsWith("/")
    ? SVELTE_APP_PATH
    : `/${SVELTE_APP_PATH}`;

  return (
    <div className="min-h-screen min-w-full bg-transparent">
      <iframe
        src={resolvedSvelteAppPath}
        className="h-screen w-screen border-0"
        title="Open WebUI"
      />
    </div>
  );
}
