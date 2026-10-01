#!/usr/bin/env bash
set -euo pipefail

REPO="anna-ssg/anna"
ARCH="Linux_x86_64"

echo "Fetching latest release info for $REPO..."
LATEST_TAG=$(
  curl -s https://api.github.com/repos/$REPO/releases/latest \
  | sed -n 's/.*"tag_name":[[:space:]]*"\([^"]*\)".*/\1/p'
)

if [[ -z "$LATEST_TAG" ]]; then
  echo "Failed to determine latest release tag, falling back to default build..."
  if command -v go &> /dev/null; then
    go install github.com/anna-ssg/anna/cmd/anna@latest || go install github.com/acmpesuecc/anna@latest
    anna
    exit 0
  else
    echo "Go is not installed and release tag not found."
    exit 1
  fi
fi

echo "Latest release: $LATEST_TAG"
TARBALL="anna_${ARCH}.tar.gz"
URL="https://github.com/$REPO/releases/download/$LATEST_TAG/$TARBALL"

echo "Downloading $URL..."
curl -L "$URL" | tar -xz anna

if [[ ! -f anna ]]; then
  echo "anna binary not found after extraction"
  exit 1
fi

chmod +x anna
echo "Running anna build..."
./anna
rm -f anna
echo "Site build complete in site/rendered"
