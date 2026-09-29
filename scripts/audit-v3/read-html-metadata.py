"""Read built metadata as data only. No browser, script execution or network."""
import hashlib
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
        self.links = []
        self.blocks = []
        self.active_blocks = []
        self.stack = []
        self.product_identity = []
        self.title = []
        self.title_depth = 0
        self.block_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        parent_hidden = self.stack[-1][1] if self.stack else False
        hidden = parent_hidden or tag in {"script", "style", "template", "noscript"} or "hidden" in attrs or attrs.get("aria-hidden") == "true"
        if tag not in {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}:
            self.stack.append((tag, hidden))
        if tag == "title":
            self.title_depth += 1
        if not hidden:
            if tag == "a" and attrs.get("href"):
                self.links.append(attrs["href"])
                for block in self.active_blocks:
                    block["links"].append(attrs["href"])
            identity = {key: value for key, value in attrs.items() if key in {"data-product-brand", "data-product-model", "data-product-mpn"}}
            if identity:
                self.product_identity.append(identity)
            if tag in {"h1", "h2", "h3", "p", "li", "dt", "dd", "tr"}:
                self.block_count += 1
                self.active_blocks.append({"tag": tag, "ordinal": self.block_count, "id": attrs.get("id"), "parts": [], "links": [], "depth": len(self.stack)})
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            self.robots.append(attrs.get("content", ""))
        if tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonicals.append(attrs.get("href", ""))

    def handle_data(self, data):
        if self.title_depth:
            self.title.append(data)
        if self.stack and self.stack[-1][1]:
            return
        for block in self.active_blocks:
            block["parts"].append(data)

    def handle_endtag(self, tag):
        if tag == "title":
            self.title_depth = max(0, self.title_depth - 1)
        closing_depth = next((index + 1 for index in range(len(self.stack) - 1, -1, -1) if self.stack[index][0] == tag), -1)
        for index in range(len(self.active_blocks) - 1, -1, -1):
            if self.active_blocks[index]["tag"] == tag and self.active_blocks[index]["depth"] == closing_depth:
                block = self.active_blocks.pop(index)
                block.pop("depth")
                block["text"] = " ".join(" ".join(block.pop("parts")).split())
                if block["text"]:
                    self.blocks.append(block)
                break
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                break


def parse_metadata(raw):
    parser = Metadata()
    parser.feed(raw)
    return {"status": "read", "robots": parser.robots, "canonicals": parser.canonicals,
            "htmlSha256": hashlib.sha256(raw.encode("utf-8")).hexdigest(),
            "title": " ".join(" ".join(parser.title).split()),
            "productIdentity": parser.product_identity,
            "links": list(dict.fromkeys(parser.links)),
            "blocks": sorted(parser.blocks, key=lambda block: block["ordinal"])}


def read_metadata(root, route):
    if not re.fullmatch(r"/(?:[a-z0-9-]+/)*", route):
        raise ValueError("Invalid local route")
    file = (root / route.lstrip("/") / "index.html").resolve()
    if not file.is_relative_to(root):
        raise ValueError("Route outside build directory")
    if not file.is_file():
        return {"status": "missing-build", "robots": [], "canonicals": []}
    return parse_metadata(file.read_bytes().decode("utf-8"))


if __name__ == "__main__":
    if sys.argv[1] == "--document":
        print(json.dumps(parse_metadata(sys.stdin.read())))
    else:
        root = pathlib.Path(sys.argv[1]).resolve(strict=True)
        routes = json.load(sys.stdin)
        print(json.dumps({route: read_metadata(root, route) for route in routes}))
