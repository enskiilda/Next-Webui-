export default function Home() {
  const svelteAppPath = "/svelte-app/";

  return (
    <div className="min-h-screen min-w-full bg-transparent">
      <iframe
        src={svelteAppPath}
        className="h-screen w-screen border-0"
        title="Open WebUI"
      />
    </div>
  );
}
