from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import socket
import sys
import threading
import time
import webbrowser


ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
START_PORT = 4174
END_PORT = 4199


class NoCacheHandler(SimpleHTTPRequestHandler):
    # Pin a few content types so they serve correctly regardless of the
    # Windows registry (e.g. SVG logos must be image/svg+xml to render in <img>).
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".svg": "image/svg+xml",
        ".js": "text/javascript",
        ".mjs": "text/javascript",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def port_is_free(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
        probe.settimeout(0.2)
        return probe.connect_ex((HOST, port)) != 0


def choose_port():
    for port in range(START_PORT, END_PORT + 1):
        if port_is_free(port):
            return port
    raise RuntimeError(f"No free port found from {START_PORT} to {END_PORT}.")


def open_browser_when_ready(url):
    time.sleep(0.5)
    webbrowser.open(url)


def main():
    no_browser = "--no-browser" in sys.argv
    port = choose_port()
    url = f"http://{HOST}:{port}/?refresh={int(time.time())}"
    handler = partial(NoCacheHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((HOST, port), handler)

    print(f"Project folder: {ROOT}")
    print(f"Local website:  {url}")
    print("Press Ctrl + C to stop the server.")

    if no_browser:
        print("Browser auto-open disabled.")
    else:
        threading.Thread(target=open_browser_when_ready, args=(url,), daemon=True).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping local server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Error: {error}", file=sys.stderr)
        input("Press Enter to exit...")
        raise
