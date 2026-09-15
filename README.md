# Mitchell's Point Marina & RV Park

Static Next.js site for the marina at 3553 Trading Post Rd, Huddleston, VA
(Smith Mountain Lake). Replaces mitchellspoint.com. Built on the same design
system as the restaurant site on the same point
(github.com/juddboniface25-cyber/mitchells-website).

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

- Facts live in `src/data/marina.ts`, each block with its source. Pages
  render from it; nothing is hard-coded in TSX.
- `hours.confirmed` gates the open-now badge and the JSON-LD hours.
- `marina.inquiryEmail` is the whole configuration for the waitlist form.
- `marina.siteUrl` drives metadataBase, robots, sitemap and schema; change
  it when the domain moves.

Process layer (goal, tasks, decisions, changelog) lives one level up in the
claude-os workspace, not in this repo.
