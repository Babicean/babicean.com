---
title: Tally
tagline: Calorie and protein tracking for iOS and Android.
summary: Calorie and protein tracking for iOS and Android. Built because I wanted a simple calorie tracker that was fast and well designed.
year: 2026
platforms: [iOS, Android]
role: Design and build
stack: [React, TypeScript, Capacitor]
status: TestFlight and Google Play beta
order: 1
media: tally-screen
# Add the repo link back once the signing key is out of it (README → Later):
# links:
#   - label: Source on GitHub
#     href: https://github.com/Babicean/Tally
---

## Why

It started as a personal problem: I wanted a simple calorie tracker that was fast and well designed, so I built my own. I use it every day on my Galaxy S26 Ultra.

## How it works

Log a meal in two taps and the day's total ticks up inside a progress ring that turns a calm amber, never red, once you pass your goal. Everyday staples live in a Menu and log in one tap, quick-add chips learn your habits, and protein tracking is optional. It's one React and TypeScript codebase wrapped for mobile with Capacitor. Data stays on the device, mirrored to Android's backed-up storage, with a JSON export for full backups.

## What I learned

Defining a "day" was harder than it looked. Nobody thinks of a 1 AM snack as tomorrow's food, so Tally's day starts at 2 AM. That rule lives in one function with unit tests covering month, year and leap-day rollovers, because history, streaks and weekly recaps all depend on it being right.
