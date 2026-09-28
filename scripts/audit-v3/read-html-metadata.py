"""Read built metadata as data only. No browser, script execution or network."""
import json
import pathlib
import re
import sys
from html.parser import HTMLParser


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.robots = []
        self.canonicals = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            self.robots.append(attrs.get("content", ""))
        if tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonicals.append(attrs.get("href", ""))


def read_metadata(root, route):
    if not re.fullmatch(r"/(?:[a-z0-9-]+/)*", route):
        raise ValueError("Invalid local route")
    file = (root / route.lstrip("/") / "index.html").resolve()
    if not file.is_relative_to(root):
        raise ValueError("Route outside build directory")
    if not file.is_file():
        return {"status": "missing-build", "robots": [], "canonicals": []}
    parser = Metadata()
    parser.feed(file.read_text())
    return {"status": "read", "robots": parser.robots, "canonicals": parser.canonicals}


if __name__ == "__main__":
    root = pathlib.Path(sys.argv[1]).resolve(strict=True)
    routes = json.load(sys.stdin)
    print(json.dumps({route: read_metadata(root, route) for route in routes}))
