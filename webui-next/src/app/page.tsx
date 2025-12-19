const SVELTE_APP_PATH =
  "/" +
  (process.env.NEXT_PUBLIC_SVELTE_APP_PATH ?? "svelte-app/").replace(/^\/+/, "");

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-transparent">
      <iframe
        src={SVELTE_APP_PATH}
        className="h-screen w-screen border-0"
        title="Open WebUI (Svelte build)"
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads"
      />
    </div>
  );
}
