---
layout: session
page-category: session
title: Offline Apps mit Xamarin.Forms und EntityFramework
speaker: Raphael Schwarz
speaker-id: raphael-schwarz
room: '15.04'
slot: 6
---

Diese Session beschäftigt sich mit der Erstellung von online/offline fähigen mobile apps mittels Xamarin.Forms und EntityFramework Core. Die Backendlogik wird im online Modus in asp.net Core gehostet und greift auf eine SQL Azure Datenbank zu. Im offline Modus wird die gleiche Logik für den direkten Zugriff auf eine SQLite Datenbank direkt am Device verwendet.

Im Zentrum der Session steht die Wiederverwendbarkeit der Zugriffslogiken sowie eine synchronisations Framework auf EF Core basis für relationale Datenbanken die uns ermöglicht einen effizienten bi-direktionalen Delta-Sync zwischen der offline und online DB durchzuführen.