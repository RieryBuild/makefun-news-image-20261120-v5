# makefun-news-image-20261120-v5

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120-v5/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120-v5/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A program that writes a single 1024×1024 image summing up the world's news of Friday 20 November 2026: 35 stories in 13 flat-illustration panels, a big-number strip, a UTC timeline, a pin map and a date check that excludes stories first reported on 19 November.

## Run it

```sh
node main.ts
```

`main.ts` copies the pre-rendered `entry.png` to `/output/entry.png`. Node 22 standard library only — no network, no randomness, no timestamps — so repeated runs are byte-identical.

## The image

- **Angle:** "One day, three fronts" — war (Kyiv/Poland), money (the AI sell-off) and the planet (Akvan/COP31) all broke on the same Friday.
- **Heroes:** Kyiv under fire · Cyclone Akvan · the AI sell-off.
- **Date discipline:** every story was first reported, or happened, on Friday 20 November 2026. Stories first reported 18–19 November (Senate Iran vote, Bukele registration, Haiti operation, US–Venezuela deal, Merz "no new Yalta", ICJ Myanmar ruling, Denmark–Greenland vote, Microsoft outage) and BepiColombo's Mercury orbit entry (21 November) are excluded and named in the image's DATE CHECK footer. See `NEWS.md` for the per-story verification.
- **Sources:** Reuters · AP · AFP · CNN · IMD · EORTC · ESPNcricinfo · official statements.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
