"""
Lanceur du prototype d'interface PFA Viralité Bluesky (EF-13 & P17)
EMSI Casablanca - 5IAD G2 - YEKHLEF Aya & EL OUALI Imane

Lancement en une commande conforme au Cahier des Charges :
    python run_dashboard.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

def run():
    global PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", PORT), Handler) as httpd:
                url = f"http://localhost:{PORT}/index.html"
                print("=" * 70)
                print("  PFA BLUESKY VIRALITÉ — PROTOTYPE DES INTERFACES (EF-13 & P17)")
                print(f"  Serveur actif sur : {url}")
                print("  Appuyez sur Ctrl+C pour arrêter le serveur.")
                print("=" * 70)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            PORT += 1

if __name__ == "__main__":
    try:
        run()
    except KeyboardInterrupt:
        print("\nArrêt du serveur.")
        sys.exit(0)
