---
# DRAFT: hidden until `draft: false`. order 0 puts it above Tally (order 1).
#
# To fill in:
#   1. Replace every [bracketed] line.
#   2. Drop screenshots into ./ai-chatbot-screens/ and list them under `screens:`
#      (web app screenshots use frame: browser; delete `frame` for phone shots).
#   3. Set `source` to the repo once its README is cleaned up.
#   4. Set draft: false. It appears first in Work, above Tally.
title: "[Project name]"
tagline: "[One line: an AI chatbot with security guardrails built in]"
summary: "[One or two lines for the homepage: what it is, and the security angle]"
year: 2026
platforms: [Web]
role: "[Design and build / your part, if it was a group project]"
stack: ["[Model or API]", "[Framework]", "[Language]"]
status: "[Status, e.g. Submitted · Semester 2 2026]"
kind: University project · IFB220
# source: https://github.com/Babicean/REPLACE-ME
order: 0
draft: true
frame: browser
# screens:
#   - src: ./ai-chatbot-screens/chat.png
#     caption: Chat
#     alt: "[What the screenshot shows, for screen readers]"
#   - src: ./ai-chatbot-screens/blocked.png
#     caption: Guardrail
#     alt: "[A blocked prompt-injection attempt and how the bot responds]"
---

## Why

[The problem: what goes wrong with an unguarded chatbot, and why you wanted to build one that defends itself.]

## Threat model

[What you defended against, in plain words. For example: prompt injection, jailbreak attempts, leaking the system prompt or private data, harmful output. One short line each.]

## How it works

[The guardrail layers in the order a message passes through them: what is checked on the way in, what the model is allowed to do, what is checked on the way out.]

[Source and technical details on GitHub ↗](https://github.com/Babicean/REPLACE-ME)

## What it taught me

[The hardest attack to stop, what you tried that didn't work, and what you'd change.]
