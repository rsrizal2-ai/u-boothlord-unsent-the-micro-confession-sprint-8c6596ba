# Unsent: The Micro-Confession Sprint — Entry

[![Unsent: The Micro-Confession Sprint](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rsrizal2-ai/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rsrizal2-ai/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for [Unsent: The Micro-Confession Sprint](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) on [make.fun](https://make.fun) — a two-part micro-confession: a To: line naming who it was meant for, and the unsent message itself, one line exactly as typed, no explanation after it.

## The entry

> To: my old mentor
>
> I still rehearse the thank-you I never sent, because "you changed my life" felt too small and too late at once.

## How it works

`main.ts` (Node 22+) writes those two parts to `/output/entry.txt` and validates them against the competition gate first: UTF-8 text, 1–260 characters total, not only whitespace, and the message itself at most 200 characters on one line.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
