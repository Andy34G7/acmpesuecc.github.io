# ACM PESUECC Website

The official website for the ACM Student Chapter at PES University Electronic City Campus, built with [Anna SSG](https://github.com/anna-ssg/anna).

## Structure

```
site/
├── content/              # Markdown content files
│   ├── index.md          # Homepage content
│   ├── about.md          # About page content
│   ├── aiep.md           # AIEP program page
│   ├── aiep/             # AIEP project & progress reports
│   ├── posts/            # Blog posts and announcements
│   ├── hn7-faq.md        # HackNight 7 FAQ
│   └── ...
├── layout/               # HTML layout templates
│   ├── config.json       # Site configuration & navigation links
│   ├── robots.txt        # Robots template
│   ├── page.html         # Base page template
│   ├── post.html         # Blog post template
│   ├── all-posts.html    # All posts collection template
│   ├── aiep.html         # AIEP main template
│   ├── aiep-grid.html    # AIEP archive & projects grid template
│   ├── aiep-project.html # Project detail template
│   ├── aiep-week.html    # Weekly progress report template
│   └── partials/
│       ├── head.html     # HTML head partial
│       ├── header.html   # Left sidebar vertical navigation partial
│       └── footer.html   # ACM stylistic footer partial
├── static/               # Static assets
│   ├── style.css         # Main stylesheet (Barlow Semi Condensed & Inter)
│   └── scripts/
│       ├── nav.js        # Responsive left navbar & drawer behavior
│       └── theme.js      # Light/Dark mode switcher
└── public/               # Static files copied to root (logos, images, etc.)
```

## Getting Started

### Prerequisites

Install [Anna SSG](https://github.com/anna-ssg/anna):

```bash
go install github.com/anna-ssg/anna/cmd/anna@latest
```

### Local Development & Live Server

Run Anna with live reload:

```bash
anna -s
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Build for Production

Build the static site into `site/rendered/`:

```bash
anna
```

Or run the deployment script:

```bash
./deploy.sh
```

## Contributing

Want to get involved? Check out the [CONTRIBUTING.md](CONTRIBUTING.md) guide to learn how you can contribute code, suggest improvements, or report issues.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
